import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from '@angular/forms';

export function updateValueAndValidity(form: FormGroup): void {
  Object.keys(form.controls).forEach((key) => {
    form.controls[key].updateValueAndValidity();
  });
}
