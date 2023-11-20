import { TestBed } from '@angular/core/testing';

import { FiltersApiService } from './filters-api.service';

describe('FiltersApiService', () => {
  let service: FiltersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
