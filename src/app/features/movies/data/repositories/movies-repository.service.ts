import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovie } from '../interfaces/movie';
import { SwapiRepository } from 'src/app/features/shared/data/repositories/swapi-repository';

@Injectable({
  providedIn: 'root'
})
export class MoviesRepositoryService extends SwapiRepository {

  constructor(private httpClient: HttpClient) {
    super(environment.swapiAPIObject, 'films');
  }

  listMovies(): Observable<any> {
    return this.httpClient.get<IMovie>(this.getBaseResourceURL()).pipe(
      tap(data => console.log(`Encontrados ${data.count} filmes`)),
      map(data => data.results),
      catchError((e) => {
        return of (() => { error: e })
      })
    );
  }
}
