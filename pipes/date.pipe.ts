import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  static monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  transform(start: string): any {
    return `${this.formatDate(start)}`;
  }

  private formatDate(date: string): string {
    const [month, day, year] = date.split('/');
    return `${DatePipe.monthNames[parseInt(month, 10) - 1]} ${day} ${year}`;
  }

}
