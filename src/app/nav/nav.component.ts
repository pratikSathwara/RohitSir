import { Component, OnInit } from '@angular/core';
// import {DateserviceService } from './dateservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  localvar:string;
  constructor() { }
  
  ngOnInit() {
  // this.localvar = date.toString();

  }
}
