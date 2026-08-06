import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieFake } from '../interfaces/movieFake';
import { IMovieItem } from '../interfaces/movie';
import { IMoviesService } from '../movies-service.token';

@Injectable({
  providedIn: 'root'
})
export class MoviesFakeService implements IMoviesService {

  constructor(private httpClient: HttpClient) { }

  listMovies(): Observable<IMovieItem[]> {
    return this.httpClient.get<IMovieFake>(environment.baseApiFilmsFake).pipe(
      map(data => data.results)
    );
  }
}
