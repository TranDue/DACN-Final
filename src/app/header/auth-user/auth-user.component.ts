import { from } from 'rxjs';
import { FirebaseService } from 'src/firebase.service';
// import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/_servieces/user.servieces';
import { TokenService } from 'src/token.service'

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent implements OnInit {
  validateForm!: FormGroup;
  //   profileForm = new FormGroup({
  //     email: new FormControl(''),
  //     password: new FormControl(''),
  // });
  isCheckLogin: boolean = false;

  // [x: string]: any;
  isSignedIn = false
  dataLogin = [
    {
      "id": 1,
      "name": "Tran Cong Due",
      "email": "trandue1999@gmail.com",
      "password": "123456",
      "remember_token": 'TYDAKSDJASLKDJASLKDJASDASD'
    },
    {
      "id": 2,
      "name": "SKIPPERHOA",
      "email": "hutech2021@gmail.com",
      "password": "123456",
      "remember_token": 'TYDAKSDJASLKDJASLKDJASDASD'
    }
  ]
  afAuth: any;
  isLoggedIn: boolean;
  constructor(public service: UserService,
    // private toasrt: ToastrService,
    private tokenService: TokenService,
    private fb: FormBuilder,
    private router: Router,
    public firebaseService: FirebaseService,
    ) { }

  ngOnInit() {
    // this.service.formModel.reset();
    // if(localStorage.getItem('user') != null )
    // this.isSignedIn = true
    // else
    // this.isSignedIn = false
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }
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
  signIn(username: string, password: string): any {
    this.tokenService.signIn(username, password).then((data) => {
      this.router.navigate(['/home']);
    });
  }
  // async signup(email:string, password: string) {
  //   await this.firebaseService.createUserWithEmailAndPasword(email,password).
  //   then(res => {
  //     this.isLoggedIn = true
  //     localStorage.setItem('user',JSON.stringify(res.user))
  //   })
  // }
  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const usern = this.validateForm.value.userName;
    const passw = this.validateForm.value.password;
    if (usern && passw) {
      this.signIn(usern, passw);
    }
  }
  onSubmit() {
    // console.warn(this.profileForm.value['email']);
    //  this.dataLogin.filter(item=>{
    //      if(item.email==this.profileForm.value['email'] && item.password==this.profileForm.value['password']){
    //          this.isCheckLogin=true;
    //          this._store.dispatch(new userLogins.CheckLoginAction({
    //              id:item.id,
    //              name:item.name,
    //              email:item.email,
    //              password:item.password,
    //              remember_token:item.remember_token
    //           }));
    //      }
    //  });
    //  if(this.isCheckLogin){
    //       alert("Success login");
    //       this.router.navigate(['/home']);
    //  }
    //  else{
    //      alert("Fail login");
    //  }
  }


  // Sign in with email/password
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['auth-user']);
    })
  }
}
