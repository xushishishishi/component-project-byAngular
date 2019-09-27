import { TestBed } from '@angular/core/testing';

import { XuxuService } from './xuxu.service';

describe('XuxuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XuxuService = TestBed.get(XuxuService);
    expect(service).toBeTruthy();
  });
});
