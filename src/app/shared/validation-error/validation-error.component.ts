import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[validationError]',
  templateUrl: './validation-error.component.html',
  styleUrls: ['./validation-error.component.scss'],
})
export class ValidationErrorComponent {
  @Input() control?: AbstractControl;
  @Input() testSelector?: string = 'validation-error';

  constructor() {}
  errorData: ValidationErrors | null = null;
  controlName: string | null = null;

  hasError(key: string): boolean {
    return this.firstErrorKey === key;
  }

  // override this to return all errors for multiline
  private get firstErrorKey(): string | undefined {
    if (this.control?.touched) {
      // simplest handling, extend as necessary (ErrorStateMatcher)
      this.errorData = this.control?.errors;
      const keys = Object.keys(this.control?.errors || {});
      if (keys.length > 0) {
        return keys[0];
      }
    }
    return undefined;
  }
}
