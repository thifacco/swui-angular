import { TestBed } from '@angular/core/testing';

import { StarshipsRepositoryService } from './starships-repository.service';

describe('StarshipsRepositoryService', () => {
  let service: StarshipsRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarshipsRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
