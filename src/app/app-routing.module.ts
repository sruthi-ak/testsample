
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componenents/login/login.component';
import { BlogComponent } from './componenents/blog/blog.component';
import { AppComponent } from './app.component';


export const AppRoutes:Routes=[
  {
    path:'http://localhost:4200/',
    redirectTo:'http://localhost:4200/',
    pathMatch:'full',
  },
  {
  path:'',
    component:AppComponent,
    children: [   
      {path:'', component: LoginComponent},
      {path:'blog', component: BlogComponent}
    ]
  }
];


