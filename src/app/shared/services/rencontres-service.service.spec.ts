import { TestBed } from '@angular/core/testing';

import { RencontresServiceService } from './rencontres-service.service';

describe('RencontresServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RencontresServiceService = TestBed.get(RencontresServiceService);
    expect(service).toBeTruthy();
  });
});
