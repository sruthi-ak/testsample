import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from  './auth/auth.service';
import { FormsModule }   from '@angular/forms';

import { AppRoutes } from './app-routing.module';
import { RouterModule , Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './componenents/login/login.component';
import { BlogComponent } from './componenents/blog/blog.component';


 var firebaseConfig = {
    apiKey: "AIzaSyAuR08NGFPxyKvAMRuzj5sdT6QUz6-w4uM",
    authDomain: "testsample-579f7.firebaseapp.com",
    databaseURL: "https://testsample-579f7.firebaseio.com",
    projectId: "testsample-579f7",
    storageBucket: "testsample-579f7.appspot.com",
    messagingSenderId: "581976587051",
    appId: "1:581976587051:web:9201983f6fb930ea25e36e",
    measurementId: "G-BXMZ1DZ1MD"
  };

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
