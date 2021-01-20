import { FirebaseService } from 'src/firebase.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../shared/cart.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>()
  searchshow = false;
  cartItems = [];
  totalItem;
  totalSum;
  constructor(
    private cartService: CartService,
    public firebaseService: FirebaseService
  ) {
    window.addEventListener("click", () => {
      this.searchshow == true;
    });
  }

  ngOnInit(): void {

    this.cartService.items.subscribe((listItem) => {
      if (listItem !== undefined && listItem !== null) {
        this.cartItems = listItem;
        console.log(this.cartItems);
        let result = 0;
        for (let item of this.cartItems) {
          result += item.soLuong;
        }
        this.totalItem = result;
        console.log(result);
      }
    })
  }
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
  showSearchBox(): void {
    console.log(this.searchshow);
    this.searchshow = !this.searchshow;

  }
  onClick(event: Event): void {
    event.stopPropagation();
    this.searchshow = !this.searchshow;
  }
  submitUser():void {
    window.alert('Comming soon !');
  }
}
