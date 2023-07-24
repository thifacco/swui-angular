import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IPeople, IPeopleItem } from '../interfaces/people';
import { Swapi } from 'src/app/features/shared/data/interfaces/swapi';

@Injectable({
  providedIn: 'root'
})
export class HomeRepositoryService {

  private swapi = new Swapi(environment.swapiAPIObject);
  private resourceKey = 'people';

  constructor(private httpClient: HttpClient) { }

  searchPeople(name: string): Observable<IPeople> {
    const options = new HttpParams().append('search', name);
    return this.httpClient.get<IPeople>(this.swapi.getBaseResourceURL(this.resourceKey), { params: options });
  }
}
