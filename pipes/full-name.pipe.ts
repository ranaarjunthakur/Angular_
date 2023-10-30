import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(name: string, lastName: string): any {
    return `${name} ${lastName}`;
  }

}
