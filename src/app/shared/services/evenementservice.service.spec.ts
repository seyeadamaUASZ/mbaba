import { TestBed } from '@angular/core/testing';

import { EvenementserviceService } from './evenementservice.service';

describe('EvenementserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvenementserviceService = TestBed.get(EvenementserviceService);
    expect(service).toBeTruthy();
  });
});
