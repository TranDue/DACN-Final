import { FirebaseService } from 'src/firebase.service';
import { Location } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSignedIn = false
  @Output() isLogout = new EventEmitter<void>()
    constructor(
      public location: Location,
      private route: ActivatedRoute,
      public firebaseService: FirebaseService
      ) { }
    ngOnInit() {
    // if(localStorage.getItem('user') != null )
    // this.isSignedIn = true
    // else
    // this.isSignedIn = false
    // }
    // async onSignup(email: string, password: string){
    //   await this.firebaseService.signup(email,password)
    //   if(this.firebaseService.isLoggenIn)
    //   this.isSignedIn = true
    // }
    // async onSignin(email: string, password: string){
    //   await this.firebaseService.signin(email,password)
    //   if(this.firebaseService.isLoggenIn)
    //   this.isSignedIn = true
    // }
    // handleLogout(){
    //   this.isSignedIn = false

    // }
    // logout(){
    //   this.firebaseService.logout()
    //   this.isLogout.emit()
    }
    removeFooter() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'login' || titlee === 'home-config' || titlee === 'details') {
            return false;
        }
        else {
            return true;
        }
    }
}
