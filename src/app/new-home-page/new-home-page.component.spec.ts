import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHomePageComponent } from './new-home-page.component';

describe('NewHomePageComponent', () => {
  let component: NewHomePageComponent;
  let fixture: ComponentFixture<NewHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
