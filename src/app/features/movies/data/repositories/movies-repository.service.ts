import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IMovie } from '../interfaces/movie';
import { Swapi } from 'src/app/features/shared/data/interfaces/swapi';

@Injectable({
  providedIn: 'root'
})
export class MoviesRepositoryService {

  private swapi = new Swapi(environment.swapiAPIObject);
  private resourceKey = 'films';

  constructor(private httpClient: HttpClient) { }

  listMovies(): Observable<any> {
    return this.httpClient.get<IMovie>(this.swapi.getBaseResourceURL(this.resourceKey)).pipe(
      tap(data => console.log(`Encontrados ${data.count} filmes`)),
      map(data => data.results),
      catchError((e) => {
        return of (() => { error: e })
      })
    );
  }
}
