import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'titleCase' })
export class TitleCasePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}


<p>{{ 'this is a title case example' | titleCase }}</p>
<!-- Output: "This Is A Title Case Example" -->
