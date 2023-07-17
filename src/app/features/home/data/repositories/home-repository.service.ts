import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IPeople, IPeopleItem } from '../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class HomeRepositoryService {

  constructor(private httpClient: HttpClient) { }

  searchPeople(query: string): Observable<IPeople> {
    const peopleName = query.trim();

    const options = new HttpParams().append('search', peopleName);

    return this.httpClient.get<IPeopleItem>(environment.baseApiPeople, { params: options }).pipe(
      tap(console.log),
      map(data => data?.results),
      tap(console.log)
    )
  }
}
