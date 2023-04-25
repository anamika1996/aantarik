import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ThirdComponent } from './third/third.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { WishListComponent } from './wish-list/wish-list.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'product',
    component:ProductsComponent
  },
  {
    path:'orderDetails',
    component:OrderDetailsComponent
  },
  {
    path:'wishList',
    component:WishListComponent
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
