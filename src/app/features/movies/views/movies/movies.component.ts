import { Component, OnInit } from '@angular/core';
import { MoviesFakeService } from 'src/app/services/movies-fake.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  $moviesFake = this.moviesFakeService.listMovies();

  constructor(private moviesFakeService: MoviesFakeService) { }

  ngOnInit(): void { }
}
