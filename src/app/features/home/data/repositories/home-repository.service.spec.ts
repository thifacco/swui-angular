import { TestBed } from '@angular/core/testing';

import { HomeRepositoryService } from './home-repository.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HomeRepositoryService', () => {
  let service: HomeRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(HomeRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
