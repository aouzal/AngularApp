import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  limit:number;
  transform(value: String, limit?:number): any {
    if(!value){
      return null;
    }
    limit?this.limit=limit:10;
     return value.substr(0,this.limit)+"...";
    
  }

}
