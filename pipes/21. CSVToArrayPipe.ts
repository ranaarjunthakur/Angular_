import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'csvToArray' })
export class CSVToArrayPipe implements PipeTransform {
  transform(csvData: string): string[] {
    if (!csvData) return [];

    // Split the CSV string into an array
    return csvData.split(',');
  }
}


// Parses a CSV (Comma-Separated Values) string into an array for easier data manipulation. 
   The example below assumes that the CSV data is provided as a string.


<ul>
  <li *ngFor="let item of 'apple,banana,cherry' | csvToArray">{{ item }}</li>
</ul>
