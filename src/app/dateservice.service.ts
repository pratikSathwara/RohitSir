import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const localUrl = "http://jsonplaceholder.typicode.com/users";
const httpptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class DateserviceService {

  constructor(private httpclient:HttpClient) { }
get(){
  return this.httpclient.get(localUrl);
}
}
