import { Component, OnInit } from '@angular/core';
import { StarshipsRepositoryService } from '../../data/starships-repository.service';
import { combineLatest, debounceTime, distinctUntilChanged, filter, map, switchMap, tap } from 'rxjs';
import { IStarshipItem } from '../../interfaces/starship';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss']
})
export class StarshipsComponent implements OnInit {

  starshipInputSearch = new FormControl();

  starships: IStarshipItem[] = [];
  starshipsLatest: IStarshipItem[] = [];

  displayedColumns: string[] = ['name', 'model', 'manufacturer'];

  starshipsList$ = this.starshipRepositoryService.getAll().pipe(
    distinctUntilChanged(),
    switchMap(() => this.starshipRepositoryService.getAll()),
    map(data => this.starships = data.results),
    tap(data => this.starshipsLatest = data)
  );

  starshipsSearch$ = this.starshipInputSearch.valueChanges.pipe(
    debounceTime(300),
    tap(inputSearchvalue => this.starships = (inputSearchvalue.length > 0) ? this.starshipsLatest : []),
    filter(inputSearchvalue => inputSearchvalue.length >= 3),
    tap(inputSearchValue => console.log(`Buscando por ${inputSearchValue}`)),
    distinctUntilChanged(),
    switchMap(inputSearchValue => this.starshipRepositoryService.getSearch(inputSearchValue)),
    map(data => this.starships = data.results)
  );
  
  constructor(private starshipRepositoryService: StarshipsRepositoryService) {}

  ngOnInit(): void {
    const observables = {
      starshipsList: this.starshipsList$,
      starshipsSearch: this.starshipsSearch$
    }

    const combineObservables = combineLatest(observables);
    combineObservables.subscribe({ 
      next: (data) => this.starships}
    );
  }
}
