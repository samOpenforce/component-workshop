import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  forwardRef,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { TranslateService } from '@ngx-translate/core';
import { parseFormattedInputString } from '../utils/StringUtils';

@Directive({
  selector: '[appInputNumberFormat]',
  providers: [
    {
      provide: MAT_INPUT_VALUE_ACCESSOR,
      useExisting: InputNumberFormatDirective,
    },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputNumberFormatDirective),
      multi: true,
    },
  ],
})
export class InputNumberFormatDirective {
  private _value: number | null = 0;

  constructor(
    private elementRef: ElementRef<HTMLInputElement>,
    private translateService: TranslateService
  ) {
    this.translateService.onLangChange.subscribe((locale: string) => {
      this.elementRef.nativeElement.value = this._value
        ? this.valueToDisplay(this._value)
        : '';
    });
  }

  get value(): number | null {
    return this._value;
  }

  @Input()
  set value(value: number | null) {
    this._value = value;
    this.formatValue(value);
  }

  private formatValue(value: number | null) {
    if (value !== null) {
      this.elementRef.nativeElement.value = this.valueToDisplay(value);
    } else {
      this.elementRef.nativeElement.value = '';
    }
  }

  private valueToDisplay = (value: number): string => {
    console.log(value);
    /* return numeral(value).format('0,0.00'); */
    return new Intl.NumberFormat(this.currentLocale, {
      minimumFractionDigits: 2,
    }).format(Number(value));
  };

  @HostListener('input', ['$event.target.value']) onInput = (value: string) => {
    this._value = parseFormattedInputString(value);
    this._onChange(this._value);
  };

  @HostListener('blur') _onBlur = (): void => {
    this.formatValue(this._value);
  };

  @HostListener('focus') onFocus = (): void => {};

  // TODO write host listener for keydown to suppress input of anything other than 0-9 , .
  // using this directive relies on the input being marked as type="text"

  _onChange = (value: number | null): void => {};

  writeValue = (value: number | null) => {
    this._value = value;
    this.formatValue(this._value);
    this._onChange(this._value);
  };

  registerOnChange = (fn: (value: any) => void) => {
    this._onChange = fn;
  };

  registerOnTouched = () => {};

  get currentLocale(): string {
    return this.translateService.currentLang;
  }
}
