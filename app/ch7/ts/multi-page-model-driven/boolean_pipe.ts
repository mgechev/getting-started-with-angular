import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'boolean' })
export class BooleanPipe implements PipeTransform {
  transform(flag: boolean, trueValue: any, falseValue: any): string {
    return flag ? trueValue : falseValue;
  }
}

