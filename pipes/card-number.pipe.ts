import {Pipe, PipeTransform} from "@angular/core";
import {Formatter} from "../service/utils/formatter.service";

@Pipe({
  name: 'cardNumber'
})
export class CardNumberPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return Formatter.cc_format(value);
  }

}
