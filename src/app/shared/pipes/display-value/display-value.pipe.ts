import { Pipe, PipeTransform } from '@angular/core';

import { TValueToDisplay } from './display-value.pipe.types';

@Pipe({
  name: 'displayValue',
  standalone: true
})
export class DisplayValuePipe implements PipeTransform {

  transform(value: unknown, displayValue: TValueToDisplay = ''): TValueToDisplay {
    return (value || displayValue) as TValueToDisplay;
  }

}
