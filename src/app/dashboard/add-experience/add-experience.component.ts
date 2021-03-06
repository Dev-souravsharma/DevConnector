import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {
  [x: string]: any;

  constructor( private routes: Router) { }

  ngOnInit(): void {
  }
  back(){
     this.routes.navigateByUrl('/dashboard-menu');
  }
}
