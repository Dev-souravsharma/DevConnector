import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  editProfile(){
    this.router.navigateByUrl('/add-profile')
  }
  addExperience(){
    this.router.navigateByUrl('/add-experience')
  }
  addEducation(){
    this.router.navigateByUrl('/add-education')
  }

}
