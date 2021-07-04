import { TestBed } from '@angular/core/testing';

import { VaccinationAnalyticsService } from './vaccination-analytics.service';

describe('VaccinationAnalyticsService', () => {
  let service: VaccinationAnalyticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinationAnalyticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
