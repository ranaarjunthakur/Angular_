import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneNumberMask' })
export class PhoneNumberMaskPipe implements PipeTransform {
  transform(phoneNumber: string): string {
    if (!phoneNumber) return '';
    // Add your custom logic for phone number masking and formatting
    // Example: (123) ***-****
  }
}



<p>{{ '1234567890' | phoneNumberMask }}</p>
<!-- Output: "(123) ***-****" -->
