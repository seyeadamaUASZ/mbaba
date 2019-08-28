import { TestBed } from '@angular/core/testing';

import { StadeService } from './stade.service';

describe('StadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StadeService = TestBed.get(StadeService);
    expect(service).toBeTruthy();
  });
});
