import { TestBed } from '@angular/core/testing';

import { MoviesFakeService } from './movies-fake.service';

describe('MoviesFakeService', () => {
  let service: MoviesFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviesFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
