import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDataComponent } from './user-data/user-data.component';
import {DashboardMenuComponent} from './dashboard/dashboard-menu/dashboard-menu.component'
import { AddExperienceComponent } from './dashboard/add-experience/add-experience.component';
import { AddEducationComponent } from './dashboard/add-education/add-education.component';
import { AddProfileComponent } from './dashboard/add-profile/add-profile.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'homeComponent',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'developer',
    component:DeveloperComponent
  },
    {
      path:'userData',
      component:UserDataComponent
    },
  {
      path:'dashboard-menu',
      component:DashboardMenuComponent
  },
  {
    path:'add-experience',
    component:AddExperienceComponent
},
  {
    path:'add-education',
    component:AddEducationComponent
  },
  {
    path:'add-profile',
    component:AddProfileComponent
  },
  {
    path:'posts',
    component:PostsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
