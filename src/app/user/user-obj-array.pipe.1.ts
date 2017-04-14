import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userObjArray'
})
export class UserObjArrayPipe implements PipeTransform {

  transform(value, args:string[]) : any {
    if (!value) {
      return value;
    } 

    let keys = [];
    // for (let key in value) {
    //   keys.push({key :  value[key]});
    // } 
    keys.push(value);
    return keys;
  } 

}
