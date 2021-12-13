import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteMultiselectComponent } from './autocomplete-multiselect.component';

describe('AutocompleteMultiselectComponent', () => {
  let component: AutocompleteMultiselectComponent;
  let fixture: ComponentFixture<AutocompleteMultiselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutocompleteMultiselectComponent],
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
