import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSelectComponent } from './autocomplete-select.component';

describe('AutocompleteSelectComponent', () => {
  let component: AutocompleteSelectComponent;
  let fixture: ComponentFixture<AutocompleteSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteSelectComponent ]
    })
    .compileComponents();
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
