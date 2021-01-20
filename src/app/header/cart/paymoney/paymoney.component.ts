import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-paymoney',
  templateUrl: './paymoney.component.html',
  styleUrls: ['./paymoney.component.css']
})
export class PaymoneyComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  threeFormGroup: FormGroup;
  items = this.cartService.getItems();
  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
    sdt: ''
  });
  constructor(
    private _formBuilder: FormBuilder,
    private formBuilder: FormBuilder,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.threeFormGroup = this._formBuilder.group({
      threeCtrl: ['', Validators.required]
    });
  }
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    alert('Bạn đã đặt hàng thành công .Hàng sẽ giao đến bạn trong 3-5 ngày tới');
    this.checkoutForm.reset();
  }
}


