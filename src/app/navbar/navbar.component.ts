import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title:string="</>";
  userAuth1:boolean=false;
  userAuth2:boolean=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  logoutUser(){
    this.router.navigateByUrl('/');
    this.userAuth1=true;
    this.userAuth2=false;
  }
}
