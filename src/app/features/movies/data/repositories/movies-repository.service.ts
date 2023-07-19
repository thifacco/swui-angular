import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, map, catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IMovie } from '../interfaces/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesRepositoryService {

  constructor(private httpClient: HttpClient) { }

  listMovies(): Observable<any> {
    return this.httpClient.get<IMovie>(environment.baseApiFilms).pipe(
      tap(data => console.log(`Encontrados ${data.count} filmes`)),
      map(data => data.results),
      catchError((e) => {
        return of (() => { error: e })
      })
    );
  }
}
