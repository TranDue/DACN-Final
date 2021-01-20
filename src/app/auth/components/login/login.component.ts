import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Store,State} from "@ngrx/store";
import { Router, ActivatedRoute } from '@angular/router';
import { UserState } from 'src/app/_reducers/user.reducer';
import { UserService } from 'src/app/_servieces/user.servieces';
import * as userLogins from 'src/app/_action/userAction';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = "Box Login"
  profileForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
  });
  isCheckLogin:boolean = false;
  dataLogin = [
      {
          "id":1,
          "name":"Tran Cong Due",
          "email":"trancongdue.com@gmail.com",
          "password":"12345678",
          "remember_token":'TYDAKSDJASLKDJASLKDJASDASD'
      },
      {
          "id":2,
          "name":"SKIPPERHOA",
          "email":"skipperhoa2021@gmail.com",
          "password":"hoa123",
          "remember_token":'TYDAKSDJASLKDJASLKDJASDASD'
      }
  ]

  constructor(private _store:Store<UserState>,private router:Router,private _userService:UserService, private userService : UserService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  OnSubmit(userName,password){
 }
  onSubmit() {
    //  console.warn(this.profileForm.value['email']);
     this.dataLogin.filter(item=>{
         if(item.email==this.profileForm.value['email'] && item.password==this.profileForm.value['password']){
             this.isCheckLogin=true;
             this._store.dispatch(new userLogins.CheckLoginAction({
                 id:item.id,
                 name:item.name,
                 email:item.email,
                 password:item.password,
                 remember_token:item.remember_token
              }));
         }
     });
     if(this.isCheckLogin){
          alert("Success login");
          this.router.navigate(['/details']);
     }
     else{
         alert("Fail login");
     }
  }

}
