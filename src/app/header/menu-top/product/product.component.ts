import { CartService } from 'src/app/shared/cart.service';
import { Observable } from 'rxjs/internal/observable';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/firebase.service';
interface Booklist {
  maSach: number,
  tenSach: string,
  Noidung: string,
  ngayxuatban: Date,
  matacgia: number,
  manhasanxuat: number,
  maloaisach: number,
  Sotrang: number,
  gia: number,
  anhSach: string
}
// const URL = 'https://5fce45a03e19cc00167c584c.mockapi.io/Book';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  items = this.cartService.getItems();
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }
  books: Booklist[] = [];

  constructor(
    private cartService: CartService,
    private firebaseS: FirebaseService,
  ) { }

  ngOnInit(): void {
    this.firebaseS.getDatas('list-sach').subscribe((data) => {
      console.log(data);
      this.books = this.firebaseS.convertListDataFromFireBase(data);
      console.log(this.books)
    })
    // this.getThongtinsach().subscribe((data) => {
    //   this.books = data;
    // })
  }
  // getThongtinsach(): Observable<any>{
  //   return this.HttpClient.get(URL);
  // }
  addCart(books): void {
    this.cartService.addToCart(books);
    window.alert('Bạn đã thêm thành công vào giỏ hàng!');
  }
}
