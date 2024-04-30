import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private uid?: string;
  constructor(private route: Router) {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        this.uid = uid
        console.log('User Logged in as ',user.email)
      } else {
        this.uid=undefined
        console.log('User Logged Out!')
      }
    });
  }

  registerUser(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log({ user });
        this.route.navigate(['login']);
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        alert('Something went wrong!');
        // ..
      });
  }
  loginUser(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log({ user });
        alert('Login Successfully!');
        this.route.navigate(['about']);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log({ errorMessage });
        alert('Email or Password is not Correct!');
      });
  }
  userLogOut() {
    const auth = getAuth();
    signOut(auth)
      .then((e) =>
        {
          console.log(e)
          alert('Logout Successfully!')
          this.route.navigate(['login'])
        })
      .catch((error) => {
        alert('Somethig went wrong while logout!');
      });
  }
}
