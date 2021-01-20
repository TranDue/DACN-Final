import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  token: string;
  constructor(public authFireBase: AngularFireAuth) { }

  login() {
    return new Promise<any>((resolve, reject) => {
      let provider = new firebase.default.auth.EmailAuthProvider();
      this.authFireBase.signInWithPopup(provider)
        .then(res => {
          resolve(res);
        }, err => {
          reject(err);
          window.alert('Lỗi Đăng Nhập')
        })
    })
  }

  signIn(email, password) {
    return this.authFireBase.signInWithEmailAndPassword(email, password)
      .then((result: firebase.default.auth.UserCredential) => {
        this.token = result.user['ya'];
        sessionStorage.setItem('token', this.token);

      }).catch((error) => {
        window.alert('Lỗi Đăng Nhập')
      });
  }

  getToken(): string {
    return this.token;
  }
}
