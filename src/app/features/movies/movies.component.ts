import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { IMovieItem } from './data/interfaces/movie';
import { MoviesFakeService } from './data/repositories/movies-fake.service';
import { LoadingComponent } from '../shared/components/loading/loading.component';
// import { MoviesRepositoryService } from './data/repositories/movies-repository.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MatTableModule, LoadingComponent],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  $moviesFake = this.moviesFakeService.listMovies();

  displayedColumns: string[] = ['episode_id', 'title', 'release_date'];
  movies: IMovieItem[] = [];

  constructor(
    private moviesFakeService: MoviesFakeService,
    // private moviesService: MoviesRepositoryService
  ) { }

  ngOnInit(): void {
    // this.moviesService.listMovies().subscribe({
    //   next: (data) => { 
    //     this.movies = data;
    //     this.movies = [...this.movies];
    //   },
    //   error: (debugError) => console.log(debugError.error),
    //   complete: () => console.log('Filmes carregados com sucesso')
    // });
    this.$moviesFake.subscribe({
      next: (data) => { 
        this.movies = data.results;
        this.movies = [...this.movies];
      },
      error: (debugError) => console.log(debugError.error),
      complete: () => console.log('Filmes carregados com sucesso')
    });
  }
}
