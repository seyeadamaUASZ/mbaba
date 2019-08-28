import { TestBed } from '@angular/core/testing';

import { OdcavService } from './odcav.service';

describe('OdcavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OdcavService = TestBed.get(OdcavService);
    expect(service).toBeTruthy();
  });
});
