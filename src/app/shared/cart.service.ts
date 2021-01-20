import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ImageService } from 'src/app/image.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  addDatas(books: any) {
    throw new Error('Method not implemented.');
  }
  items: Subject<any> = new Subject<any>();
  private _item = [];
  private __item = [];
  constructor(private http: HttpClient,
    private imageService: ImageService) { }
                       ///    0  1  2  3  => n[0]  i
    // var n = [1,7,3,4]   //// [1, 2, 3, 4]

    // let sum = 0;
    // for(let i = 0 ; i < n.length; i++){
    //   /////////a^     b^     c ^
    //   sum += n[i];
    //   // d
    //   \\\7
    // }

    // console
// n = 4
// i = 0, sum = 1
// sum = 1, i = 1, sum + 7 = sum 8
// sum 8, i = 2 sum + 3 = 11
// sum = 11, i = 3, sum + 4 = 11 + 4 = 15
// sum = 15, i = 4
    // a > b > c

    // for(;;){


    // }
  addToCart(book) {
    if (this._item.length > 1) {
      let isExist = false;
      for (let item of this._item) {
        if (item.id === book.id) {
          isExist = true;
          item.soLuong = item.soLuong ? item.soLuong + 1 : 1;
        }
      }
      if (!isExist) {
        book.soLuong = 1;
        this._item.push(book);
      }
    } else {
      book.soLuong = 1;
      this._item.push(book);
    }
    this.items.next(this._item);
    window.alert('Bạn đã thêm thành công vào giỏ hàng!');
  }
  addWith(book) {
    if (this.__item.length > 1) {
      let isExist = false;
      for (let item of this.__item) {
        if (item.id === book.id) {
          isExist = true;
          item.soLuong = item.soLuong ? item.soLuong + 1 : 1;
        }
      }

      if (!isExist) {
        book.soLuong = 1;
        this.__item.push(book);
      }
    } else {
      book.soLuong = 1;
      this.__item.push(book);
    }
    this.items.next(this.__item);
    window.alert('Đã yêu thích !!!');
  }

  getItems() {
    return this._item;
  }

  clearCart() {
    this._item = [];
    return this._item;
  }

  setItems(items) {
    this._item = items;
    this.items.next(this._item);
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  uploadBackgroundImg(img: File): void {
    this.imageService.updateBackground(img);
  }
}
