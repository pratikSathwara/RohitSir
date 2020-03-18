import { Component, OnInit } from '@angular/core';
import {MyapiService}   from '../shared/myapi.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  mydata:any=[];
  constructor(private myservices:MyapiService) { }

  ngOnInit() {
    this.loaddata();
  }
loaddata(){
// alert("called");
return this.myservices.Displayemployeelist().subscribe((data)=>{
  this.mydata=data;
})

}
}
