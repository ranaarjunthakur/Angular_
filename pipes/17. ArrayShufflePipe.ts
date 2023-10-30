import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'arrayShuffle' })
export class ArrayShufflePipe implements PipeTransform {
  transform(array: any[]): any[] {
    if (!array) return array.slice();

    let currentIndex = array.length, randomIndex, temporaryValue;
  
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
}


// Shuffles the elements of an array, creating a random order for display.


<ul>
  <li *ngFor="let item of items | arrayShuffle">{{ item }}</li>
</ul>
