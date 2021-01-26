import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { CartService } from 'src/app/shared/cart.service';
import { Observable } from 'rxjs/internal/observable';
import { FormBuilder } from '@angular/forms';
import { sum } from 'ng-zorro-antd/core/util';

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
const URL = 'https://localhost:5001/api/SACH'

type NewType = String;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  books: Booklist[] = [];
  items = this.cartService.getItems();
  toTal;
  endpoint = "https://test-payment.momo.vn/gw_payment/transactionProcessor";
  hostname = "https://test-payment.momo.vn";
  path = "/gw_payment/transactionProcessor";
  partnerCode = "MOMOQIKG20201017";
  accessKey = "s288OBQJn5Eogcw2";
  serectkey = "AZT7Pr5WVmYGKfWEBOkzEfEqRNhvwT7u";
  orderInfo = "Thánh toán tiền sách trên Website bằng ví MoMo";
  returnUrl = "http://localhost:4200/";
  notifyurl = "https://momo.vn/return";
  amount = "28000";
  orderId = (Math.random().toString(36) + 'Momo').slice(2, 234234);
  requestId = (Math.random().toString(36) + 'Momo').slice(2, 234234);
  requestType = "captureMoMoWallet";
  extraData = "merchantName=;merchantId=";

  rawSignature = "partnerCode=" + this.partnerCode + "&accessKey=" + this.accessKey + "&requestId=" + this.requestId +
    "&amount=" + this.amount + "&orderId=" + this.orderId + "&orderInfo=" + this.orderInfo + "&returnUrl=" + this.returnUrl +
    "&notifyUrl=" + this.notifyurl + "&extraData=" + this.extraData;

  homeConfig = null;

  constructor(private http: HttpClient,
    private cartService: CartService,
    private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.cartService.items.subscribe((items) => {
      this.items = items;
    })
  }
  getTimeCur(): string {
    var a = new Date()
    return (a.getUTCFullYear().toString() + a.getMonth().toString() + a.getDate().toString() + a.getHours().toString() + a.getMinutes().toString() + a.getUTCMilliseconds().toString())
  }
  getAmount(): string {
    // let a = "150000"
    let a = this.items
    var sum = 0;
    for (let i of this.items) {
      sum += i?.gia * i?.soLuong;
    }
      return sum + ''
    console.log('', sum);
    return this.items.reduce((initialValue, currentValue) => {
      return initialValue = currentValue?.gia * currentValue?.soLuong;
    }, 0)
    // return ''
    // return a
  }
  submitPay(): void {
    console.log(this.getAmount());

    this.orderId = this.getTimeCur();
    this.amount = this.getAmount() + '';
    let newSinature = "partnerCode=" + this.partnerCode + "&accessKey=" + this.accessKey + "&requestId=" + this.requestId +
      "&amount=" + this.amount + "&orderId=" + this.orderId + "&orderInfo=" + this.orderInfo + "&returnUrl=" + this.returnUrl +
      "&notifyUrl=" + this.notifyurl + "&extraData=" + this.extraData;

    let signature = CryptoJS.HmacSHA256(newSinature, this.serectkey).toString(CryptoJS.enc.Hex);
    let body = JSON.stringify({
      partnerCode: this.partnerCode,
      accessKey: this.accessKey,
      requestId: this.requestId,
      amount: this.amount,
      orderId: this.orderId,
      orderInfo: this.orderInfo,
      returnUrl: this.returnUrl,
      notifyUrl: this.notifyurl,
      extraData: this.extraData,
      requestType: this.requestType,
      signature: signature
    });
    console.log('THis is signature =>>>>>', signature);
    const options = {
      hostname: 'test-payment.momo.vn',
      port: 443,
      path: '/gw_payment/transactionProcessor',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let url = options.hostname + ":" + options.port + options.path;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });
    url = 'https://' + url;
    console.log('url >>>', url);
    console.log(body);

    this.http.post("/gw_payment/transactionProcessor", body, { headers: header }).subscribe((res: any) => {
      if (res.errorCode === 0) {
        window.open(res.payUrl, 'width=500,height=600');
      }
    });
  }
  tangSoLuongSach(idSach) {
    this.items.forEach((sach) => {
      if (sach && sach.id === idSach) {
        sach.soLuong += 1;
      }
    });

    this.cartService.setItems(this.items);
  }

  giamSoLuongSach(idSach) {
    this.items.forEach((sach) => {
      if (sach && sach.id === idSach) {
        sach.soLuong -= 1;
      }
    });

    this.items = this.items.filter((sach) => sach.soLuong > 0);

    this.cartService.setItems(this.items);
  }
}

