import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Subscription } from 'rxjs';
import { User } from '../Model/user.model';
import { UserService } from '../Model/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  userdata!:FormGroup
  Users!:User[];
  private subscribe!:Subscription
  constructor(builder:FormBuilder,private userService:UserService) {
        this.userdata=builder.group({
          'username':['',Validators.required],
          'email':['',Validators.required,Validators.email],
          'password':['',Validators.required,Validators.maxLength(7)],
          'confirmPassword':['',Validators.required]
        },
        );
  }
  ngOnInit(): void {
        this.Users=this.userService.showUser();
        console.log(this.Users)
        this.subscribe=this.userService.userChange.subscribe((user:User[])=>
                                  {this.Users=user}
            )
  }
  onSubmit(){
    console.log(this.userdata.value.username);
    alert("Data Added");
    const userDetail=new User(1,this.userdata.value.username,this.userdata.value.email);
    this.userService.addUser(userDetail);
  }
  usernameData(){
    return this.userdata.controls.email.value
  }
  mustMatch(password:string,cpassword:string){
    if(password===cpassword)
      return true;
    else
      return false;
  }

}
