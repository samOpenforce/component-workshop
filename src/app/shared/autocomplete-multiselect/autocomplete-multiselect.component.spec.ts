import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ControlContainer,
  FormControl,
  FormControlDirective,
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AutocompleteMultiselectComponent } from './autocomplete-multiselect.component';

describe('AutocompleteMultiselectComponent', () => {
  let component: AutocompleteMultiselectComponent;
  let fixture: ComponentFixture<AutocompleteMultiselectComponent>;

  let fgd: FormGroupDirective;

  beforeEach(async () => {
    const fg: FormGroup = new FormGroup({
      selectedOptions: new FormControl(''),
    });
    fgd = new FormGroupDirective([], []);
    fgd.form = fg;
    await TestBed.configureTestingModule({
      declarations: [AutocompleteMultiselectComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
      ],
      providers: [{ provide: ControlContainer, useValue: fgd }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteMultiselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
