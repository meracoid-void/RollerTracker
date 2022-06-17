import { TestBed } from '@angular/core/testing';

import { CaptainCoasterService } from './captain-coaster.service';

describe('CaptainCoasterService', () => {
  let service: CaptainCoasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaptainCoasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
