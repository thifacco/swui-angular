import { Component, OnInit } from '@angular/core';
import { HomeRepositoryService } from '../../data/repositories/home-repository.service';
import { IPeopleItem } from '../../data/interfaces/people';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  peopleInputSearch = new FormControl();

  peopleResults$ = this.peopleInputSearch.valueChanges.pipe(
    debounceTime(300),
    filter(value => value.length >= 3),
    tap(value => console.log(`Buscando por '${value}' ...`)),
    switchMap(value => this.homeService.searchPeople(value)),
    map(data => this.people = data.results),
  );

  displayedColumns: string[] = ['name', 'height', 'mass'];
  people: IPeopleItem[] = [];

  constructor(private homeService: HomeRepositoryService) {}

  ngOnInit(): void {
  }
}
