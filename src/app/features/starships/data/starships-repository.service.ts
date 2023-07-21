import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IStarship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipsRepositoryService {
  baseAPI = environment.swapiAPIObject.base.url;

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IStarship> {
    return this.httpClient.get<IStarship>(`${this.baseAPI}/${environment.swapiAPIObject.resources.starships}`);
  }

  // getSearch(query): Observable<IStarship> {
  //   return this.httpClient.get<IStarship>(environment.baseApiObjects.starships)
  // }
}
