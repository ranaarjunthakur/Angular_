// Removes all HTML tags from a given string, ensuring that only plain text is displayed.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'stripHtmlTags' })
export class StripHTMLTagsPipe implements PipeTransform {
  transform(html: string): string {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '');
  }
}



<p>{{ '<p>This is <b>HTML</b> text</p>' | stripHtmlTags }}</p>
<!-- Output: "This is HTML text" -->
