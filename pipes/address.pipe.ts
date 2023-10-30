import {Pipe, PipeTransform} from '@angular/core';
import {AddressInfo} from '../interfaces';
import {UtilsService} from "../service/util.service";

@Pipe({
  name: 'address'
})
export class AddressPipe implements PipeTransform {

  constructor(private utilsService: UtilsService) {
  }

  transform(a: AddressInfo, args?: any): any {
    return UtilsService.addressToString(a);
  }

}
