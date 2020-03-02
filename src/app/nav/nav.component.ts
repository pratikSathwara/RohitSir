import { Component, OnInit } from '@angular/core';
import {DateserviceService } from '../dateservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  mydata:any=[];
  constructor(private dateser:DateserviceService) { }
  
  ngOnInit() {
   this.get();


  }
  get(){
    this.dateser.get().subscribe(
      res=>this.mydata=res );
    }
}
