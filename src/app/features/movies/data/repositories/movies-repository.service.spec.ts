import { TestBed } from '@angular/core/testing';

import { MoviesRepositoryService } from './movies-repository.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoviesRepositoryService', () => {
  let service: MoviesRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MoviesRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
