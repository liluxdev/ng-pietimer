import { TestBed } from '@angular/core/testing';

import { NgPietimerService } from './ng-pietimer.service';

describe('NgPietimerService', () => {
  let service: NgPietimerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgPietimerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
