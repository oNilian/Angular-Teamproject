import { TestBed } from '@angular/core/testing';

import { GetSavedArticlesService } from './get-saved-articles.service';

describe('GetSavedArticlesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSavedArticlesService = TestBed.get(GetSavedArticlesService);
    expect(service).toBeTruthy();
  });
});
