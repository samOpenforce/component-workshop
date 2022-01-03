import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { stringMatch } from '../../shared/WorkshopValidators';
import { ShowErrorOnSubmitted } from '../../utils/workshop-ErrorStateMatchers';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnInit {
  loginForm!: FormGroup;
  submittedMatcher = new ShowErrorOnSubmitted();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: [null, [Validators.minLength(4), Validators.required]],
      email: [null, [Validators.required, Validators.email, stringMatch('tree@forest')]],
    });
  }

  get getControl(): {
    [key: string]: AbstractControl;
  } {
    return this.loginForm.controls;
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
}
