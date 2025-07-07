import { Pipe, PipeTransform } from '@angular/core';
import { MaritalStatusEnum } from '../enums/marital-status.enum';
import { maritalStatusDescriptonMap } from '../utils/marital-status-descripton-map';

@Pipe({
  name: 'maritalStatus'
})
export class MaritalStatusPipe implements PipeTransform {
  transform(maritalStatus: number | undefined): string {
    return maritalStatus ? maritalStatusDescriptonMap[maritalStatus as MaritalStatusEnum] : '';
  }
}
