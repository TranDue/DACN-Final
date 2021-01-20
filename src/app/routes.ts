import { SignUpComponent } from './auth/components/sign-up/sign-up.component';
import { Routes } from '@angular/router'
import { DetailComponent } from './auth/components/detail/detail.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
export const appRoutes: Routes = [
    { path: 'home', component: DetailComponent,canActivate:[AuthGuard] },
    {
        path: 'signup', component: SignUpComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: LoginComponent,
        children: [{ path: '', component: LoginComponent }]
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'}

];
