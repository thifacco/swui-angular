import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie, IMovieItem } from '../interfaces/movie';
import { SwapiRepository } from 'src/app/features/shared/data/repositories/swapi-repository';
import { IMoviesService } from '../movies-service.token';

@Injectable({
  providedIn: 'root'
})
export class MoviesRepositoryService extends SwapiRepository implements IMoviesService {

  constructor(private httpClient: HttpClient) {
    super(environment.swapiAPIObject, 'films');
  }

  listMovies(): Observable<IMovieItem[]> {
    return this.httpClient.get<IMovie>(this.getBaseResourceURL()).pipe(
      tap(data => console.log(`Encontrados ${data.count} filmes`)),
      map(data => data.results)
    );
  }
}
