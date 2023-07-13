import { Component, OnInit } from '@angular/core';
import { MoviesFakeService } from 'src/app/services/movies-fake.service';
import { IMovie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  // $moviesFake = this.moviesFakeService.listMovies();

  displayedColumns: string[] = ['title'];
  movies: IMovie[] = [];

  constructor(private moviesFakeService: MoviesFakeService) { }

  ngOnInit(): void {
    this.moviesFakeService.listMovies().subscribe(data => { 
      this.movies = data;
      this.movies = [...this.movies];
    });
  }
}
