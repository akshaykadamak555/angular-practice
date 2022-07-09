import { TestBed } from '@angular/core/testing';

import { CourceserviceService } from './courceservice.service';

describe('CourceserviceService', () => {
  let service: CourceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
