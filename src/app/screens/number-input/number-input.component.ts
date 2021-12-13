import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { stringMatch } from '../../shared/WorkshopValidators';

// locale handling
import { registerLocaleData } from '@angular/common';
import localeEnAu from '@angular/common/locales/en-AU';
import localeDeAt from '@angular/common/locales/de-AT';

@Component({
  selector: 'app-number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss'],
})
export class NumberInputComponent implements OnInit {
  accountNumberForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.accountNumberForm = this.formBuilder.group({
      accountNumber: [null, [Validators.minLength(4), Validators.required]],
    });

    registerLocaleData(localeEnAu);
    registerLocaleData(localeDeAt);
  }

  get getControl(): {
    [key: string]: AbstractControl;
  } {
    return this.accountNumberForm.controls;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  suppressNegatives(event: KeyboardEvent): void {
    if (event.key === '-' || event.code === 'Minus') {
      event.preventDefault();
    }
  }

  switchLocale(): void {
    this.cd.detectChanges();
  }
}
