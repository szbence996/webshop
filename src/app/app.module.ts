import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { HotToastModule } from '@ngneat/hot-toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatSelectModule } from '@angular/material/select';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { FragrancesComponent } from './fragrances/fragrances.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { UserComponent } from './user/user.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { LoginComponent } from './login-reg-landing/login/login.component';
import { OrdersComponent } from './login-reg-landing/orders/orders.component';
import { SignUpComponent } from './login-reg-landing/sign-up/sign-up.component';
import { ProfileComponent } from './login-reg-landing/profile/profile.component';
import { SharedService } from './shared.service';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { FooterComponent } from './footer/footer.component';
import { ModalProductsComponent } from './products/modal-products/modal-products.component';
import { CustomButtonComponent } from './custom/custom-button/custom-button.component';
import { CustomCartButtonComponent } from './custom/custom-cart-button/custom-cart-button.component';
import { CustomRemoveButtonComponent } from './custom/custom-remove-button/custom-remove-button.component';
import { CustomSpinnerComponent } from './custom/custom-spinner/custom-spinner.component';
import { CustomExitButtonComponent } from './custom/custom-exit-button/custom-exit-button.component';
import { AddedToCartAlertComponent } from './added-to-cart-alert/added-to-cart-alert.component';
import { CustomKeepButtonComponent } from './custom/custom-keep-button/custom-keep-button.component';
import { ShoppingCartModalComponent } from './shopping-cart/shopping-cart-modal/shopping-cart-modal.component';
import { LandingComponent } from './login-reg-landing/landing/landing.component';
import { DiorFragrancesComponent } from './fragrances/dior-fragrances/dior-fragrances.component';
import { JPGFragrancesComponent } from './fragrances/jpg-fragrances/jpg-fragrances.component';
import { LancomeFragrancesComponent } from './fragrances/lancome-fragrances/lancome-fragrances.component';
import { ManFragrancesComponent } from './fragrances/man-fragrances/man-fragrances.component';
import { SettingsButtonComponent } from './fragrances/settings-button/settings-button.component';
import { WomanFragrancesComponent } from './fragrances/woman-fragrances/woman-fragrances.component';
import { ModalComponent } from './fragrances/modal-fragrance/modal.component';
import { FragranceCarouselComponent } from './fragrances/fragrance-carousel/fragrance-carousel.component';

const firebaseConfig = {
  apiKey: "AIzaSyAVqh08gg_Fn6aOjMmmPZbJ2AryiAxuUN4",
  authDomain: "webshop-afp.firebaseapp.com",
  projectId: "webshop-afp",
  storageBucket: "webshop-afp.firebasestorage.app",
  messagingSenderId: "979555940660",
  appId: "1:979555940660:web:3d234250eb8517dda80d61",
  useEmulator: true,
  experimentalForceLongPolling: true,
}

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    AccessoriesComponent,
    FragrancesComponent,
    FragranceCarouselComponent,
    ModalComponent,
    DiorFragrancesComponent,
    JPGFragrancesComponent,
    LancomeFragrancesComponent,
    WomanFragrancesComponent,
    ManFragrancesComponent,
    CustomButtonComponent,
    SettingsButtonComponent,
    ShoppingCartComponent,
    ShippingComponent,
    UserComponent,
    UserHeaderComponent,
    LoginComponent,
    OrdersComponent,
    ProfileComponent,
    SignUpComponent,
    SkeletonLoaderComponent,
    FooterComponent,
    ModalProductsComponent,
    CustomButtonComponent,
    CustomCartButtonComponent,
    CustomRemoveButtonComponent,
    CustomSpinnerComponent,
    CustomExitButtonComponent,
    CustomKeepButtonComponent,
    AddedToCartAlertComponent,
    ShoppingCartComponent,
    ShoppingCartModalComponent,
    LandingComponent,

  ],
  imports: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    MatFormFieldModule,
    NgxSkeletonLoaderModule,
    CommonModule,
    MatSelectModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MatSelectModule,
    provideAuth(() => getAuth()),
  ],
  providers: [SharedService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
