import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { IStarship } from './interfaces/starship';

export interface IStarshipsService {
  getAll(page?: number): Observable<IStarship>;
  getSearch(query: string): Observable<IStarship>;
}

export const STARSHIPS_SERVICE = new InjectionToken<IStarshipsService>('STARSHIPS_SERVICE');
