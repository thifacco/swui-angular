import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { Subject, takeUntil } from 'rxjs';
import { IMovieItem } from './data/interfaces/movie';
import { MOVIES_SERVICE } from './data/movies-service.token';
import { LoadingComponent } from '../shared/components/loading/loading.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, MatTableModule, LoadingComponent],
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, OnDestroy {
  private readonly moviesService = inject(MOVIES_SERVICE);
  private readonly destroyed$ = new Subject<void>();

  displayedColumns: string[] = ['episode_id', 'title', 'release_date'];
  movies: IMovieItem[] = [];

  ngOnInit(): void {
    this.moviesService.listMovies().pipe(takeUntil(this.destroyed$)).subscribe({
      next: (data) => {
        this.movies = [...data];
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
