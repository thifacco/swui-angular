import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IPeople } from '../interfaces/people';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly baseUrl = environment.swapiAPIObject.base.url + environment.swapiAPIObject.resources.people;

  constructor(private httpClient: HttpClient) { }

  searchPeople(name: string): Observable<IPeople> {
    const options = new HttpParams().append('search', name);
    return this.httpClient.get<IPeople>(this.baseUrl, { params: options });
  }
}
