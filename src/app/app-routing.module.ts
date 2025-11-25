import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { LoginComponent } from './login-reg-landing/login/login.component';
import { SignUpComponent } from './login-reg-landing/sign-up/sign-up.component';
import { LandingComponent } from './login-reg-landing/landing/landing.component';
import { OrdersComponent } from './login-reg-landing/orders/orders.component';
import { canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { ProfileComponent } from './login-reg-landing/profile/profile.component';
import { ShippingComponent } from './shipping/shipping.component';
import { FragrancesComponent } from './fragrances/fragrances.component';
import { UserComponent } from './user/user.component';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = () => redirectLoggedInTo(['user']);
const redirectToProfile = () => redirectLoggedInTo(['user/profile']);

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'accessories', component: AccessoriesComponent },
  { path: 'fragrances', component: FragrancesComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'landing', component: LandingComponent },
  {
    path: 'user', component: UserComponent, ...canActivate(redirectToProfile)
  },

  { path: 'user/login', component: LoginComponent, ...canActivate(redirectToHome) },
  { path: 'user/sign-up', component: SignUpComponent, ...canActivate(redirectToHome) },
  { path: 'user/orders', component: OrdersComponent, ...canActivate(redirectToLogin) },
  { path: 'user/profile', component: ProfileComponent, ...canActivate(redirectToLogin) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
