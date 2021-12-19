import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutocompleteMultiselectComponent } from '../../shared/autocomplete-multiselect/autocomplete-multiselect.component';
import { AutocompleteSelectComponent } from '../../shared/autocomplete-select/autocomplete-select.component';

import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SelectComponent,
        AutocompleteMultiselectComponent,
        AutocompleteSelectComponent,
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
