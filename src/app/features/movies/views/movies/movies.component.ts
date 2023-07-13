import { Component, OnInit } from '@angular/core';
import { MoviesFakeService } from 'src/app/services/movies-fake.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  // $moviesFake = this.moviesFakeService.listMovies();

  displayedColumns: string[] = ['title'];
  moviesFake = [];

  constructor(private moviesFakeService: MoviesFakeService) { }

  ngOnInit(): void {
    this.moviesFakeService.listMovies().subscribe(data => { 
      this.moviesFake = data;
      this.moviesFake = [...this.moviesFake];
    });
  }
}
