import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function stringMatch(str: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const val: string = control.value;
    if (str && val !== str) {
      return {
        stringMatch: { requiredValue: str, currentValue: val },
      };
    }
    return null;
  };
}
