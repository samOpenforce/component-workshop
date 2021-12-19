import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutocompleteSelectComponent } from './autocomplete-select.component';

describe('AutocompleteSelectComponent', () => {
  let component: AutocompleteSelectComponent;
  let fixture: ComponentFixture<AutocompleteSelectComponent>;

  let fgd: FormGroupDirective;
  beforeEach(async () => {
    const fg: FormGroup = new FormGroup({
      selectedOption: new FormControl(''),
    });
    fgd = new FormGroupDirective([], []);
    fgd.form = fg;
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
      ],
      declarations: [AutocompleteSelectComponent],
      providers: [{ provide: ControlContainer, useValue: fgd }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
