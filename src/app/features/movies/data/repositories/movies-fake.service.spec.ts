import { TestBed } from '@angular/core/testing';

import { MoviesFakeService } from './movies-fake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoviesFakeService', () => {
  let service: MoviesFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(MoviesFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
