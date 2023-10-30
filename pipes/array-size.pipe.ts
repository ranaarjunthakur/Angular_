import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'arraySize'
})
export class ArraySizePipe implements PipeTransform {

  constructor() {
  }

  transform(data: any[], args?: any): any {
    return data.length;
  }

}
