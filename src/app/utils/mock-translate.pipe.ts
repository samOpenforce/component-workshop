import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
// this pipe is only used to mock the ngx-translate translate pipe -> only use for testing
export class MockTranslatePipe implements PipeTransform {
  public name = 'translate';

  public transform(query: string, ...args: any[]): any {
    return query;
  }
}
