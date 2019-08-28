import { TestBed } from '@angular/core/testing';

import { TerminalServiceService } from './terminal-service.service';

describe('TerminalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TerminalServiceService = TestBed.get(TerminalServiceService);
    expect(service).toBeTruthy();
  });
});
