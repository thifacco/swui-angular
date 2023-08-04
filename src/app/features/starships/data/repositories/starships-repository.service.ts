import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStarship } from '../interfaces/starship';
import { SwapiRepository } from '../../../shared/data/repositories/swapi-repository';

@Injectable({
  providedIn: 'root'
})
export class StarshipsRepositoryService extends SwapiRepository {

  constructor(private httpClient: HttpClient) {
    super(environment.swapiAPIObject, 'starships');
  }

  getAll(page: number = 1): Observable<IStarship> {
    const options = new HttpParams().append(this.getFeaturePage(), page);
    return this.httpClient.get<IStarship>(this.getBaseResourceURL(), { params: options });
  }

  getSearch(query: string): Observable<IStarship> {
    const options = new HttpParams().append(this.getFeatureSearch(), query);
    return this.httpClient.get<IStarship>(this.getBaseResourceURL(), { params: options });
  }
}
