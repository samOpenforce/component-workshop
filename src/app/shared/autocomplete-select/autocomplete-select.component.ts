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

@Component({
  selector: '[formGroup] app-autocomplete-select',
  templateUrl: './autocomplete-select.component.html',
  styleUrls: ['./autocomplete-select.component.scss'],
})
/**
 * provides autocomplete for select box options
 */
export class AutocompleteSelectComponent implements OnInit {
  @ViewChild('stringInput', { static: false }) stringInput!: ElementRef;

  @Input() formGroup!: FormGroup;
  @Input() allOptions: Array<any> = [];
  options: Array<any> = [];
  // TODO unrequird?? if control is part of parent form
  //@Output() emitOptionChange = new EventEmitter<any>();

  public form!: FormGroup;
  private selectedOption!: FormControl;
  constructor(private controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.options = this.allOptions;

    this.form = <FormGroup>this.controlContainer.control;
    this.selectedOption = new FormControl(undefined, [Validators.required]);

    this.form.addControl('selectedOption', this.selectedOption);
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
}
