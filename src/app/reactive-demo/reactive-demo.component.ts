import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup , FormControl, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-demo',
  templateUrl: './reactive-demo.component.html',
  styleUrls: ['./reactive-demo.component.css']
})
export class ReactiveDemoComponent implements OnInit {
  reactiveform:FormGroup;
  myfun(){
    console.log(this.reactiveform.value);
  }
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    // this.reactiveform=new FormGroup({
    //   firstname:new FormControl(''),
    //   lastname:new FormControl(''),
    //   username:new FormControl(''),
    //   password:new FormControl(''),
    //   Mnumber:new FormControl(''),
    //   address:new FormGroup({
    //     city:new FormControl(''),
    //     street:new FormControl(''),
    //     pincode:new FormControl(''),
    //   })
    // })
  this.reactiveform=this.formbuilder.group({
    firstname:['', [Validators.required, Validators.minLength(5),Validators.maxLength(10)]],
    lastname:['',[Validators.required]],
    username:['',[ Validators.email, Validators.required]],
    password:[''],
    Mnumber:[''],
    address:this.formbuilder.group({
    city:[''],
    street:[''],
    pincode:['']
  })
})
  }
  get firstname(){
    return this.reactiveform.get('firstname');
  }
  get lastname(){
    return this.reactiveform.get('lastname');
  }
  get username(){
    return this.reactiveform.get('username');
  }
}
