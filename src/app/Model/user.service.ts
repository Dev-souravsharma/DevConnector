import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {User} from './user.model'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Subject Added
  userChange=new Subject<User[]>();

  private userData:User[]=[
    new User(1,'Sourav Sharma','Sourav12@gmail.com')
  ];
  constructor() { }
  addUser(users:User){
    this.userData.push(users);
    this.userChange.next(this.userData.slice());
  }
  showUser(){
    console.log("service"+this.userData.values);
   return this.userData.slice();
  }
}
