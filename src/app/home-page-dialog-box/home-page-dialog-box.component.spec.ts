import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageDialogBoxComponent } from './home-page-dialog-box.component';

describe('HomePageDialogBoxComponent', () => {
  let component: HomePageDialogBoxComponent;
  let fixture: ComponentFixture<HomePageDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
