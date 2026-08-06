import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStarship } from '../interfaces/starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {
  private readonly baseUrl = environment.swapiAPIObject.base.url + environment.swapiAPIObject.resources.starships;

  constructor(private httpClient: HttpClient) { }

  getAll(page: number = 1): Observable<IStarship> {
    const options = new HttpParams().append(environment.swapiAPIObject.features.page, page);
    return this.httpClient.get<IStarship>(this.baseUrl, { params: options });
  }

  getSearch(query: string): Observable<IStarship> {
    const options = new HttpParams().append(environment.swapiAPIObject.features.search, query);
    return this.httpClient.get<IStarship>(this.baseUrl, { params: options });
  }
}
