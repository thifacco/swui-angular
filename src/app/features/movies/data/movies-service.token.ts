import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovieItem } from './interfaces/movie';

export interface IMoviesService {
  listMovies(): Observable<IMovieItem[]>;
}

export const MOVIES_SERVICE = new InjectionToken<IMoviesService>('MOVIES_SERVICE');
