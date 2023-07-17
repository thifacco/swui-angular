import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeRepositoryService } from '../../data/repositories/home-repository.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  searchQuery: string = '';
  subscription: Subscription = new Subscription;

  constructor(private homeService: HomeRepositoryService) {}

  ngOnInit(): void {
  }

  homeSearchPeople(query: string) {
    console.log(query);
    this.subscription = this.homeService.searchPeople(query).subscribe({
      next: data => console.log(data),
      error: debugError => console.error(debugError)
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
