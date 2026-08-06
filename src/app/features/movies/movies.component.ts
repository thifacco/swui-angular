import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
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
export class MoviesComponent implements OnInit, OnDestroy {
  $moviesFake = this.moviesFakeService.listMovies();

  displayedColumns: string[] = ['episode_id', 'title', 'release_date'];
  movies: IMovieItem[] = [];

  private readonly destroyed$ = new Subject<void>();

  constructor(
    private moviesFakeService: MoviesFakeService,
    // private moviesService: MoviesRepositoryService
  ) { }

  ngOnInit(): void {
    // this.moviesService.listMovies().pipe(takeUntil(this.destroyed$)).subscribe({
    //   next: (data) => {
    //     this.movies = data;
    //     this.movies = [...this.movies];
    //   },
    //   error: (debugError) => console.log(debugError.error),
    //   complete: () => console.log('Filmes carregados com sucesso')
    // });
    this.$moviesFake.pipe(takeUntil(this.destroyed$)).subscribe({
      next: (data) => {
        this.movies = data.results;
        this.movies = [...this.movies];
      },
      error: (debugError) => console.log(debugError.error),
      complete: () => console.log('Filmes carregados com sucesso')
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
