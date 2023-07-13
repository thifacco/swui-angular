import { Component, OnInit } from '@angular/core';
import { IMovie, IMovieItem } from '../../data/interfaces/movie';
import { MoviesRepositoryService } from '../../data/repositories/movies-repository.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  // $moviesFake = this.moviesFakeService.listMovies();

  displayedColumns: string[] = ['title'];
  movies: IMovieItem[] = [];

  constructor(
    private moviesService: MoviesRepositoryService
  ) { }

  ngOnInit(): void {
    this.moviesService.listMovies().subscribe(data => { 
      this.movies = data;
      this.movies = [...this.movies];
    });
  }
}
