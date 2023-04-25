import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ThirdComponent } from './third/third.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CaraouselComponent } from './caraousel/caraousel.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { ModalComponent } from './modal/modal.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { ProductDetailsModalComponent } from './product-details-modal/product-details-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ChildComponent,
    ParentComponent,
    ThirdComponent,
    LoginComponent,
    HomeComponent,
    CaraouselComponent,
    CartComponent,
    ProductsComponent,
    HeaderComponent,
    OrderDetailsComponent,
    WishListComponent,
    ProductDetailsModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
