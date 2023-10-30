import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truncateText' })
export class TruncateTextPipe implements PipeTransform {
  transform(text: string, limit: number): string {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  }
}



<p>{{ 'This is a long text that should be truncated' | truncateText:20 }}</p>
<!-- Output: "This is a long text..." --
