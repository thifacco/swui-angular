import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../data/repositories/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchField: string = '';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.homeService.searchPeople().subscribe(data => console.log(data));
  }
}
