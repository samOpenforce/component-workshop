import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideDrawerComponent } from './right-side-drawer.component';

describe('RightSideDrawerComponent', () => {
  let component: RightSideDrawerComponent;
  let fixture: ComponentFixture<RightSideDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RightSideDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RightSideDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
