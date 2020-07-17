import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router } from "@angular/router";

import { AuthService } from  '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private  authService:  AuthService) { }

  logIn: any = {email:'',password:''};

  ngOnInit(): void {
  }



    loginSubmit(){
     let postObs=this.authService.login(this.logIn.email,this.logIn.password);
     
       
  }

}
