import { UserService } from 'src/app/shared/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  FormGroup } from '@angular/forms';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  userClaims: any;

  constructor( private router: Router, private userService: UserService){
  }
  ngOnInit(): void {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

    });
  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
