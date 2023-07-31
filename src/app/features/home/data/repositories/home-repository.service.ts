import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IPeople, IPeopleItem } from '../interfaces/people';
import { SwapiRepository } from 'src/app/features/shared/data/repositories/swapi-repository';

@Injectable({
  providedIn: 'root'
})
export class HomeRepositoryService extends SwapiRepository {

  constructor(private httpClient: HttpClient) {
    super(environment.swapiAPIObject, 'people');
  }

  searchPeople(name: string): Observable<IPeople> {
    const options = new HttpParams().append('search', name);
    return this.httpClient.get<IPeople>(this.getBaseResourceURL(), { params: options });
  }
}
