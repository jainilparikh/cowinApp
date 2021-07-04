import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationAnalyticsComponent } from './vaccination-analytics.component';

describe('VaccinationAnalyticsComponent', () => {
  let component: VaccinationAnalyticsComponent;
  let fixture: ComponentFixture<VaccinationAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
