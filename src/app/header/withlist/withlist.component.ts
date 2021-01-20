import { Observable } from 'rxjs/internal/observable';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/shared/cart.service';

interface Booklist {
  maSach: number,
  tenSach: string,
  Noidung: string,
  ngayxuatban: Date,
  tacgia: number,
  manhasanxuat: number,
  maloaisach: number,
  Sotrang: number,
  gia: number,
  anhSach: string
}
const URL = 'https://5fce45a03e19cc00167c584c.mockapi.io/Book';
@Component({
  selector: 'app-withlist',
  templateUrl: './withlist.component.html',
  styleUrls: ['./withlist.component.css']
})
export class WithlistComponent implements OnInit {
  items = this.cartService.getItems();

  books: Booklist[] = [];
  constructor(
    private HttpClient: HttpClient,
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.cartService.items.subscribe((items) => {
      this.items = items;
    })
  }
  getThongtinsach(): Observable<any> {
    return this.HttpClient.get(URL);
  }
}
