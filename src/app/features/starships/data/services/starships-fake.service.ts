import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStarship, IStarshipItem } from '../interfaces/starship';
import { IStarshipsService } from '../starships-service.token';

interface IStarshipFake {
  results: IStarshipItem[];
}

@Injectable({
  providedIn: 'root'
})
export class StarshipsFakeService implements IStarshipsService {
  private readonly pageSize = 10;

  constructor(private httpClient: HttpClient) { }

  getAll(page: number = 1): Observable<IStarship> {
    return this.httpClient.get<IStarshipFake>(environment.baseApiStarshipsFake).pipe(
      map(data => this.paginate(data.results, page))
    );
  }

  getSearch(query: string): Observable<IStarship> {
    return this.httpClient.get<IStarshipFake>(environment.baseApiStarshipsFake).pipe(
      map(data => data.results.filter(starship =>
        starship.name.toLowerCase().includes(query.toLowerCase()) ||
        starship.model.toLowerCase().includes(query.toLowerCase()) ||
        starship.starship_class.toLowerCase().includes(query.toLowerCase())
      )),
      map(results => this.paginate(results, 1))
    );
  }

  private paginate(results: IStarshipItem[], page: number): IStarship {
    const start = (page - 1) * this.pageSize;

    return {
      count: results.length,
      next: start + this.pageSize < results.length ? 'next' : '',
      previous: null,
      results: results.slice(start, start + this.pageSize)
    };
  }
}
