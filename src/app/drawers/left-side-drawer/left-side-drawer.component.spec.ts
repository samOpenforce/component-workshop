import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideDrawerComponent } from './left-side-drawer.component';

describe('LeftSideDrawerComponent', () => {
  let component: LeftSideDrawerComponent;
  let fixture: ComponentFixture<LeftSideDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftSideDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSideDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
