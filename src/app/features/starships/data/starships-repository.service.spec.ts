import { TestBed } from '@angular/core/testing';

import { StarshipsRepositoryService } from './starships-repository.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('StarshipsRepositoryService', () => {
  let service: StarshipsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(StarshipsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
