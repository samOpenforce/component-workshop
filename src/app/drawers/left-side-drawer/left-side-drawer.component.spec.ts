import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { MockTranslatePipe } from '../../utils/mock-translate.pipe';

import { LeftSideDrawerComponent } from './left-side-drawer.component';

export class TranslateServiceStub {
  public get(key: any): any {
    return of(key);
  }
}
describe('LeftSideDrawerComponent', () => {
  let component: LeftSideDrawerComponent;
  let fixture: ComponentFixture<LeftSideDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeftSideDrawerComponent, MockTranslatePipe],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialog, useValue: {} },
        { provide: MatSnackBar, useValue: {} },
        { provide: TranslateService, useClass: TranslateServiceStub },
      ],
    }).compileComponents();
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
