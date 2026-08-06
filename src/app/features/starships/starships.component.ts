import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { StarshipsRepositoryService } from './data/repositories/starships-repository.service';
import { Subject, combineLatest, debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil, tap } from 'rxjs';
import { IStarshipItem } from './data/interfaces/starship';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { StarshipDetails } from './data/interfaces/starship-details';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@Component({
  selector: 'app-starships',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    LoadingComponent
  ],
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class StarshipsComponent implements OnInit, OnDestroy {

  starshipInputSearch = new FormControl('', { nonNullable: true });
  starships: IStarshipItem[] = [];
  starshipsLatest: IStarshipItem[] = [];
  starshipsCount: number = 0;
  starshipsPageIndexStart: number = 0;
  starshipsDisplayItemsPerPage: number = 10;

  starshipsList$ = this.starshipRepositoryService.getAll().pipe(
    distinctUntilChanged(),
    map(data => {
      this.starships = data.results;
      this.starshipsLatest = data.results;
      this.starshipsCount = data.count;
    })
  );

  starshipsSearch$ = this.starshipInputSearch.valueChanges.pipe(
    debounceTime(300),
    tap(inputSearchvalue => {
      this.starships = (inputSearchvalue.length === 0) ? this.starshipsLatest : []
    }),
    filter(inputSearchvalue => inputSearchvalue.length >= 3),
    tap(inputSearchValue => console.log(`Buscando por ${inputSearchValue}`)),
    distinctUntilChanged(),
    switchMap(inputSearchValue => this.starshipRepositoryService.getSearch(inputSearchValue)),
    map(data => {
      this.starships = data.results; 
      this.starshipsCount = data.count;
    })
  );

  displayedColumns: string[] = ['name', 'model', 'starship_class', 'expand'];
  expandedElement: StarshipDetails | undefined;

  private readonly destroyed$ = new Subject<void>();

  constructor(private starshipRepositoryService: StarshipsRepositoryService) {}

  ngOnInit(): void {
    const observables = {
      starshipsList: this.starshipsList$,
      starshipsSearch: this.starshipsSearch$
    }

    combineLatest(observables).pipe(takeUntil(this.destroyed$)).subscribe();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  handlePageChange(event: PageEvent) {
    const pageIndex = event.pageIndex + 1;

    this.starshipRepositoryService.getAll(pageIndex).pipe(takeUntil(this.destroyed$)).subscribe(
      data => this.starships = data.results
    );
  }
}
