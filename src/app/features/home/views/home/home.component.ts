import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeRepositoryService } from '../../data/repositories/home-repository.service';
import { Subscription } from 'rxjs';
import { IPeopleItem } from '../../data/interfaces/people';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  subscription: Subscription = new Subscription;
  displayedColumns: string[] = ['name', 'height', 'mass'];
  people: IPeopleItem[] = [];

  constructor(private homeService: HomeRepositoryService) {}

  ngOnInit(): void {
  }

  homeSearchPeople(query: string) {
    console.log(`Search for: ${query}`);
    this.subscription = this.homeService.searchPeople(query).subscribe({
      next: data => this.people = data.results,
      error: debugError => console.error(debugError)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
