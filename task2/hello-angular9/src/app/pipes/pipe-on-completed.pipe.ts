import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeOnCompleted'
})
export class PipeOnCompletedPipe implements PipeTransform {

  transform(value: boolean): any {
    if(value)
      return "Yes";
    return "No";
  }

}
