import { Component, OnInit } from '@angular/core';
import { HomeRepositoryService } from '../../data/repositories/home-repository.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchField: string = '';

  constructor(private homeService: HomeRepositoryService) {}

  ngOnInit(): void {
    this.homeService.searchPeople().subscribe(data => console.log(data));
  }
}
