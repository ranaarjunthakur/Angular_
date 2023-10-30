import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amount'
})
export class AmountPipe implements PipeTransform {

  transform(value: number, modifier: string = ''): string {
    return value.toFixed(2) + modifier;
  }

}
