import { TestBed } from '@angular/core/testing';

import { DatabaseApiService } from './database-api.service';

describe('DatabaseApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatabaseApiService = TestBed.get(DatabaseApiService);
    expect(service).toBeTruthy();
  });
});
