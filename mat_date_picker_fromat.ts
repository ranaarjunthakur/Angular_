/////////////////mat date picker date format//////////////////////

import {Component, Input, OnInit} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats, NativeDateAdapter} from '@angular/material/core';
 
 
 
// https://amandeepkochhar.medium.com/angular-material-datepicker-set-custom-date-in-dd-mm-yyyy-format-5c0f4340e57
export class AppDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      let day: string = date.getDate().toString();
      day = +day < 10 ? '0' + day : day;
      let month: string = (date.getMonth() + 1).toString();
      month = +month < 10 ? '0' + month : month;
      let year = date.getFullYear();
      return `${day}-${month}-${year}`;
    }
    return date.toDateString();
  }
}
 
export const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
  },
  display: {
    dateInput: 'input',
    monthYearLabel: {year: 'numeric', month: 'numeric'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};
 
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS }
  ]
})
export class EditComponent implements OnInit {

 format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      return formatDate(date, 'dd-MMM-yyyy', this.locale).toUpperCase();
    } else {
      return date.toLocaleDateString('en-us', { year: "numeric", month: "short" });
    }
  }
