import { TestBed } from '@angular/core/testing';

import { StarshipsFakeService } from './starships-fake.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StarshipsFakeService', () => {
  let service: StarshipsFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(StarshipsFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
