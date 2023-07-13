import { Component, OnInit } from '@angular/core';
import { IMovieItem } from '../../data/interfaces/movie';
// import { MoviesFakeService } from '../../data/repositories/movies-fake.service';
import { MoviesRepositoryService } from '../../data/repositories/movies-repository.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  // $moviesFake = this.moviesFakeService.listMovies();

  displayedColumns: string[] = ['episode_id', 'title', 'release_date'];
  movies: IMovieItem[] = [];

  constructor(
    // private moviesFakeService: MoviesFakeService,
    private moviesService: MoviesRepositoryService
  ) { }

  ngOnInit(): void {
    this.moviesService.listMovies().subscribe(data => { 
      this.movies = data;
      this.movies = [...this.movies];
    });
  }
}
