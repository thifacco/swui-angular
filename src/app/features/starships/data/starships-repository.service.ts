import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IStarship } from '../interfaces/starship';
import { Swapi } from '../../shared/data/interfaces/swapi';

@Injectable({
  providedIn: 'root'
})
export class StarshipsRepositoryService {

  private swapi = new Swapi(environment.swapiAPIObject);
  private resourceKey = 'starships';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IStarship> {
    return this.httpClient.get<IStarship>(this.swapi.getBaseResourceURL(this.resourceKey));
  }

  getSearch(query: string): Observable<IStarship> {
    const options = new HttpParams().append(this.swapi.getFeatureSearch(), query);
    return this.httpClient.get<IStarship>(this.swapi.getBaseResourceURL(this.resourceKey), { params: options });
  }
}
