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

  searchPeople(name: string): Observable<IPeople> {
    const options = new HttpParams().append('search', name);
    return this.httpClient.get<IPeople>(environment.baseApiPeople, { params: options });
  }
}
