import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 
  // submit(abc){
 

  //   console.log(abc.value);
    
 
  // }
  
  // books = [
  // {id: 1,name :"php"},
  // {id: 2,name :"css"},
  // {id: 3,name :"html"},
  // {id: 4,name :"git"},

  // ];  
  constructor( ) {
   }

  ngOnInit() {
    
  }
  CountaryList:countary[] =[
    new countary("0","---select--",true),
    new countary("1","india",false),
    new countary("2","canada",false),
    new countary("3","aus",false),
  ];
}

export class countary{
  id:string;
  name:string;
  isselected:boolean
  constructor(id:string,name:string,isselected:boolean){
    this.id=id;
    this.name=name;
    this.isselected=isselected;
  }
}

