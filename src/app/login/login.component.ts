import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  email:any=""
  ngOnInit(): void {
  }
  onSubmit(data:any){
    console.log(data);
    this. email=data.controls.userEmail.value;
  }

}
