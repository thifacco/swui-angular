import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IPeople } from '../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class HomeRepositoryService {

  constructor(private httpClient: HttpClient) { }

  searchPeople(): Observable<IPeople> {
    return this.httpClient.get(environment.baseApiPeople).pipe(
      tap(console.log)
    )
  }
}
