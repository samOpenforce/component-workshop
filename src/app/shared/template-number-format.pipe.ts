import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'templateNumberFormat',
})
export class TemplateNumberFormatPipe implements PipeTransform {
  transform(
    value: number | string,
    locale: string,
    hideDigits: boolean
  ): string {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: hideDigits ? 0 : 2,
    }).format(Number(value));
  }
}

// ca
