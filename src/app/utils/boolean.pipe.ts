import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolean'
})
export class BooleanPipe implements PipeTransform {

  transform(val: any, args?: any): any {
    return val === 'true' ? 'text-danger' : '';
  }

}
