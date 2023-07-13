import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap, pluck } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MoviesFakeService {

  constructor(private httpClient: HttpClient) { }

  listMovies(): Observable<any> {
    return this.httpClient.get(environment.baseApi).pipe(
      tap(console.log),
      map(data => data.results),
      tap(console.log)
    );
  }
}
