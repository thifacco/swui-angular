import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IMovieFake } from '../interfaces/movieFake';

@Injectable({
  providedIn: 'root'
})
export class MoviesFakeService {

  constructor(private httpClient: HttpClient) { }

  listMovies(): Observable<IMovieFake> {
    return this.httpClient.get<IMovieFake>(environment.baseApiFilmsFake);
  }
}
