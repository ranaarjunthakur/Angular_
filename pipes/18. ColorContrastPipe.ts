import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'colorContrast' })
export class ColorContrastPipe implements PipeTransform {
  transform(backgroundColor: string): string {
    if (!backgroundColor) return '';

    // Calculate the brightness of the background color
    const r = parseInt(backgroundColor.slice(1, 3), 16);
    const g = parseInt(backgroundColor.slice(3, 5), 16);
    const b = parseInt(backgroundColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Determine the text color for good contrast
    return brightness > 128 ? 'black' : 'white';
  }
}


// Determines the best text color (black or white) to ensure good contrast against a background color. 
    The pipe below assumes that the background color is provided in hexadecimal format.

<div [style.background-color]="'#3498db'" [style.color]="'#3498db' | colorContrast">
  Text with contrast
</div>
