import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  mydata:uclass;
  submitdata(pra){
    console.log(pra.value);
  
  }

  constructor() { }

  ngOnInit() {

    this.mydata={
      firstname:'',
      lastname:'',
      Address:'',
      Email:''
    }
  }

  resetformdata(fdata:NgForm){
    fdata.resetForm();
  }
}
export class uclass{
  firstname:string;
  lastname:string;
  Address:any;
  Email:any;
}