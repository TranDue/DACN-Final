import { ProductDetailssService } from './components/detail/shared_/product-detailss.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './components/detail/detail.component';
import { HeaderConfigComponent } from './components/header-config/header-config.component';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgZoroAntDesignModule } from '../ng-zoro-ant-design/ng-zoro-ant-design.module';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { HomeConfigComponent } from './components/detail/home-config/home-config.component';
import { SanphamConfigComponent } from './components/detail/sanpham-config/sanpham-config.component';
import { PhanhoiConfigComponent } from './components/detail/phanhoi-config/phanhoi-config.component';
import { ThongkeConfigComponent } from './components/detail/thongke-config/thongke-config.component';
import { LienheConfigComponent } from './components/detail/lienhe-config/lienhe-config.component';
import { AccountConfigComponent } from './components/detail/account-config/account-config.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from '../app.component';
import { MatTableModule } from '@angular/material/table';
import { BillConfigComponent } from './components/detail/bill-config/bill-config.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    LoginComponent,
    DetailComponent,
    HeaderConfigComponent,
    HomeConfigComponent,
    SanphamConfigComponent,
    PhanhoiConfigComponent,
    ThongkeConfigComponent,
    LienheConfigComponent,
    AccountConfigComponent,
    BillConfigComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    ReactiveFormsModule,
    NgZoroAntDesignModule,
    MatIconModule,
    MatBadgeModule,
    MatTabsModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [ProductDetailssService]
})

export class AuthModule { }
