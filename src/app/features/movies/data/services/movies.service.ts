import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie, IMovieItem } from '../interfaces/movie';
import { IMoviesService } from '../movies-service.token';

@Injectable({
  providedIn: 'root'
})
export class MoviesService implements IMoviesService {
  private readonly baseUrl = environment.swapiAPIObject.base.url + environment.swapiAPIObject.resources.films;

  constructor(private httpClient: HttpClient) { }

  listMovies(): Observable<IMovieItem[]> {
    return this.httpClient.get<IMovie>(this.baseUrl).pipe(
      tap(data => console.log(`Encontrados ${data.count} filmes`)),
      map(data => data.results)
    );
  }
}
