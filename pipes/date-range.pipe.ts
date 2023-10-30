import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {

  static monthNames: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  transform(start: string, end: string): any {
    return `${this.formatDate(start)} - ${this.formatDate(end)}`;
  }

  private formatDate(date: string): string {
    const [month, day, year] = date.split('/');
    return `${DateRangePipe.monthNames[parseInt(month, 10) - 1]} ${day} ${year}`;
  }

}
