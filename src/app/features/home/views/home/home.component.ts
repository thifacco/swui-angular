import { Component, OnDestroy, OnInit } from '@angular/core';
import { HomeRepositoryService } from '../../data/repositories/home-repository.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  searchField: string = '';
  subscription: Subscription = new Subscription;

  constructor(private homeService: HomeRepositoryService) {}

  ngOnInit(): void {
    void this.homeSearchPeople();
  }

  homeSearchPeople() {
    this.subscription = this.homeService.searchPeople().subscribe(data => console.log(data));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
