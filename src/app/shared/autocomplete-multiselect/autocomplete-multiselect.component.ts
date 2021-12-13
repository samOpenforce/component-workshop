import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

export interface ColorOption {}

@Component({
  selector: 'app-autocomplete-multiselect',
  templateUrl: './autocomplete-multiselect.component.html',
  styleUrls: ['./autocomplete-multiselect.component.scss'],
})
export class AutocompleteMultiselectComponent implements OnInit {
  @ViewChild('stringInput', { static: false }) stringInput!: ElementRef;

  @Input() formGroup!: FormGroup;
  @Input() allOptions: Array<any> = [];
  options: Array<any> = [];
  // TODO unrequird?? if control is part of parent form
  //@Output() emitOptionChange = new EventEmitter<any>();

  public form!: FormGroup;
  private selectedOptions!: FormControl;
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.options = this.allOptions;

    this.form = <FormGroup>this.controlContainer.control;
    this.selectedOptions = new FormControl([], [Validators.required]);

    this.form.addControl('selectedOptions', this.selectedOptions);
    this.form.get('selectedOptions')?.setValue([]);
  }

  get getControl(): {
    [key: string]: AbstractControl;
  } {
    return this.form.controls;
  }

  public handleFocusOnOpen(): void {
    this.stringInput.nativeElement.focus();
  }

  public handleSelectionChange(option: any): void {
    // TODO unrequird?? if control is part of parent form
    //this.emitOptionChange.next(option);
  }
  drop(event: any): any {
    console.log(event);
  }
  public handleInputChange(event: any): void {
    this.options = this.filterOptions(event.target.value);
  }

  public clearInputAndFilter(event: any): void {
    this.stringInput.nativeElement.value = '';
    this.stringInput.nativeElement.focus();
    this.options = this.filterOptions('');
  }

  private filterOptions(value: string): Array<any> {
    const filterValue = value.toLowerCase();
    return this.allOptions.filter((option) => {
      return (
        [option.displayName, option.value]
          .join('')
          .toLowerCase()
          .indexOf(filterValue) > -1
      );
    });
  }

  public removeSelectedOption(index: number): void {
    const arrayCopy = Array.from(this.getControl.selectedOptions.value);
    const strippedArray = arrayCopy.filter((selectedOption, optionIndex) => {
      return index !== optionIndex;
    });
    this.getControl.selectedOptions.setValue(strippedArray);
  }
}
