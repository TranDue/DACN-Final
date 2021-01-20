import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
// import {Store,State} from "@ngrx/store";
// import {Observable, from} from "rxjs";
// import { Router, ActivatedRoute } from '@angular/router';
// import { UserState } from 'src/app/_reducers/user.reducer';
// import * as userLogins from 'src/app/_action/userAction';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  // title = "Box Login"
  // profileForm = new FormGroup({
  //     email: new FormControl(''),
  //     password: new FormControl(''),
  // });
  // isCheckLogin:boolean = false;
  // dataLogin = [
  //     {
  //       "id":1,
  //       "name":"Tran Cong Due",
  //       "email":"aloalo123@gmail.com",
  //       "password":"123456",
  //       "remember_token":'TYDAKSDJASLKDJASLKDJASDASD'
  //   },
  //   {
  //       "id":2,
  //       "name":"SKIPPERHOA",
  //       "email":"hutech123@gmail.com",
  //       "password":"123123",
  //       "remember_token":'TYDAKSDJASLKDJASLKDJASDASD'
  //     }
  // ]

  constructor(){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  onSubmit() {
//      console.warn(this.profileForm.value['email']);
//      this.dataLogin.filter(item=>{
//          if(item.email==this.profileForm.value['email'] && item.password==this.profileForm.value['password']){
//              this.isCheckLogin=true;
//              this._store.dispatch(new userLogins.CheckLoginAction({
//                  id:item.id,
//                  name:item.name,
//                  email:item.email,
//                  password:item.password,
//                  remember_token:item.remember_token
//               }));
//          }
//      });
//      if(this.isCheckLogin){
//       alert("Đăng nhập thành công");
//       this.router.navigate(['/detail-user']);
//  }
//  else{
//      alert("Đăng nhập thất bại !! Kiểm tra lại tài khoản mật khẩu");
//  }
}

}
