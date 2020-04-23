import { TestBed } from '@angular/core/testing';

import { SharedStateService } from './sharedState.service';

describe('ServerService', () => {
  let service: SharedStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
