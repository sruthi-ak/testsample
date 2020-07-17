import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { AngularFireAuth } from  "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from  'firebase';
import * as firebase from 'firebase/app';
import { BlogComponent } from '../componenents/blog/blog.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public  afAuth:  AngularFireAuth,private firestore: AngularFirestore, public  router:  Router) { }

  user: User;
    //user login
    login(email: string, password: string) {
        this.afAuth.signInWithEmailAndPassword(email, password)
        .then(res => {
          console.log('You are Successfully logged in!');
          console.log(res);
          alert('Successfully loggedin');
          this.router.navigate(['blog']);
        })
        .catch(err => {
        alert('Something is wrong:');
        });
    }
    //display blogs
    showBlogs() { 
      return this.firestore.collection("blogs").snapshotChanges();
    }
    //create new blogs
    createBlogs(data) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("blogs")
            .add(data)
            .then(res => {}, err => reject(err));
    });
}

}
