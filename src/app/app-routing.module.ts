import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { ShippingComponent } from './header/cart/shipping/shipping.component';
import { DetailComponent } from './auth/components/detail/detail.component';
import { DetailProductComponent } from './header/menu-top/product/detail-product/detail-product.component';
import { LoginComponent } from '././auth/components/login/login.component';
import { CheckoutComponent } from './header/cart/checkout/checkout.component';
import { ContactComponent } from './header/menu-top/contact/contact.component';
import { VanPhongPhamComponent } from './body/menu-body/van-phong-pham/van-phong-pham.component';
import { SachTiengVietComponent } from './body/menu-body/sach-tieng-viet/sach-tieng-viet.component';
import { EnglishbookComponent } from './body/menu-body/englishbook/englishbook.component';
import { BlogComponent } from './header/menu-top/blog/blog.component';
import { AboutUsComponent } from './header/menu-top/about-us/about-us.component';
import { CompareComponent } from './header/compare/compare.component';
import { CartComponent } from './header/cart/cart.component';
import { BodyComponent } from './body/body.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WithlistComponent } from './header/withlist/withlist.component';
import { ProductComponent } from './header/menu-top/product/product.component';
import { RankComponent } from './header/menu-top/rank/rank.component';
import { ErrorComponent } from './header/menu-top/error/error.component';
import { QuaLuuNiemComponent } from './body/menu-body/qua-luu-niem/qua-luu-niem.component';
import { SearchproductComponent } from './searchproduct/searchproduct.component';
import { AuthUserComponent } from './header/auth-user/auth-user.component';
import { DetailUserComponent } from './header/auth-user/detail-user/detail-user.component';
import { AppComponent } from './app.component';
import { appRoutes } from './routes'
const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'auth-user', loadChildren: () => import("./auth/auth-routing.module").then(module => module.AuthRoutingModule), pathMatch: 'full' },
  { path: 'auth-user', component: AuthUserComponent },
  { path: 'index', component: BodyComponent },
  { path: 'cart', component: CartComponent },
  { path: 'withlist', component: WithlistComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'product', component: ProductComponent },
  { path: 'rank', component: RankComponent },
  { path: 'englishbook', component: EnglishbookComponent },
  { path: 'qua-luu-niem', component: QuaLuuNiemComponent },
  { path: 'sach-tieng-viet', component: SachTiengVietComponent },
  { path: 'van-phong-pham', component: VanPhongPhamComponent },
  { path: 'error-404', component: ErrorComponent },
  { path: 'search-product', component: SearchproductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'detail-user', component: DetailUserComponent },
  { path: 'detai-product', component: DetailProductComponent },
  { path: 'login', component: LoginComponent },
  { path: 'details', component: DetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
  { path: 'shipping', component: ShippingComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
  RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
