import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateserviceService {

  constructor() { }


  displayDate(){
    var date = new Date();
    return date;
  }
}
