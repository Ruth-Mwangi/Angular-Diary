import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {


    let today:Date= new Date()
    let shortDate:any= new Date(today.getFullYear(),today.getMonth(),today.getDate())
    var dateDiff= Math.abs(value-shortDate);
    const secondInDay=86400;
    var dateDiffSeconds=dateDiff*0.001;
    var daysRemaining=dateDiffSeconds/secondInDay;
    if (daysRemaining>=1 && value>shortDate){
      return daysRemaining
    }
    else{
      return 0;
    }
  }
  

}
