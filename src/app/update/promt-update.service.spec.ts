import { TestBed } from '@angular/core/testing';

import { PromtUpdateService } from './promt-update.service';

describe('PromtUpdateService', () => {
  let service: PromtUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromtUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
