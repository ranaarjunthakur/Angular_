import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customNumber'
})
export class CustomNumberPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let fromatedNumber  = value.toFixed(2);
    return fromatedNumber.endsWith('.00') ? fromatedNumber.slice(0,-3) : fromatedNumber;
  }

}
