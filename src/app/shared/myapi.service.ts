import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Employee} from '../shared/employee'
@Injectable({
  providedIn: 'root'
})
export class MyapiService {
   localUrl = "http://localhost:3000";

  constructor(private httpclient:HttpClient) {

   }
}
