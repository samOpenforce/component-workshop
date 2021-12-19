import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
// DO NOT IMPORT IN MODULE - unit testing use only
export class MockTranslatePipe implements PipeTransform {
  public name = 'translate';

  public transform(query: string, ...args: any[]): any {
    return query;
  }
}
