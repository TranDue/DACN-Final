import { Observable } from 'rxjs/internal/observable';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from 'src/firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
interface Book {
  id: number,
  name: string,
  src: string,
  tacgia: string,
  ncc: string,
  nxb: string,
  price: string
}
// const URL = 'https://5fce45a03e19cc00167c584c.mockapi.io/Book';
// const URL = 'https://localhost:5001/api/SACH'
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {
  items = this.cartService.getItems();

  books: Booklist[] = [];
  inforbook: Book =
    {
      id: 1,
      name: 'Con Chim Xanh Biếc Bay Về - Tặng Kèm 6 Postcard',
      src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/i/biamem.jpg",
      tacgia: 'Nguyễn Nhật Ánh',
      ncc: 'NXB Trẻ',
      nxb: 'NXB Trẻ',
      price: '120.000 đồng'
    };
  inforbook1: Book =
    {
      id: 1,
      name: 'Cổ Tích Mới - Chiếc Áo Tàng Hình',
      src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_61144.jpg",
      tacgia: 'Nguyên Hương',
      ncc: 'NXB Trẻ',
      nxb: 'NXB Trẻ',
      price: '23.800 đ'
    };
  inforbook2: Book =
    {
      id: 1,
      name: 'Viên Ngọc Bùa Mê',
      src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/i/m/image_60982.jpg",
      tacgia: 'Nguyễn Nhật Ánh',
      ncc: 'NXB Trẻ',
      nxb: 'NXB Trẻ',
      price: '23.800 đ'
    };
  inforbook3: Book =
    {
      id: 1,
      name: 'Con Chim Xanh Biếc Bay Về ',
      src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/8/9/8934974137139.jpg",
      tacgia: 'Nguyễn Nhật Ánh',
      ncc: 'NXB Trẻ',
      nxb: 'NXB Trẻ',
      price: '120.000 đồng'
    };
  inforbook4: Book =
    {
      id: 1,
      name: 'Con Chim Xanh Biếc Bay Về - Tặng Kèm 6 Postcard',
      src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/i/biamem.jpg",
      tacgia: 'Nguyễn Nhật Ánh',
      ncc: 'NXB Trẻ',
      nxb: 'NXB Trẻ',
      price: '120.000 đồng'
    };
  inforbook5: Book =
    {
      id: 1,
      name: 'Con Chim Xanh Biếc Bay Về - Tặng Kèm 6 Postcard',
      src: "https://cdn0.fahasa.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/i/biamem.jpg",
      tacgia: 'Nguyễn Nhật Ánh',
      ncc: 'NXB Trẻ',
      nxb: 'NXB Trẻ',
      price: '120.000 đồng'
    };
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
  }
  addCart(books): void {
    this.cartService.addToCart(books);
  }
  addWith(books): void {
    this.cartService.addWith(books);
  }
}
