import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ModalComponent } from '../modal/modal.component';
import { ProductDetailsModalComponent } from '../product-details-modal/product-details-modal.component';


@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  @ViewChild('modal') modal: ModalComponent;
  @ViewChild('productDetailsModal') productDetailsModal: ProductDetailsModalComponent


wishListDetails;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getUserWishListDetails().subscribe((res:any[])=>{
      this.wishListDetails=res;
      console.log("this.wishListDetails",this.wishListDetails.products);
      // for(let i in this.cartDetails.products){
      //   console.log("this.cartDetails.products.price",this.cartDetails.products[i].price)
      //   this.totalPrice=this.totalPrice+parseFloat(this.cartDetails.products[i].price)*parseFloat(this.cartDetails.products[i].count);
      // }
    })
  }
  removeFromWishList(wishListID){
    this.dataservice.deleteProductFromWishList(wishListID).subscribe((res:any[])=>{
      this.wishListDetails=res;
      console.log("this.wishListDetails",this.wishListDetails.products);
      // for(let i in this.cartDetails.products){
      //   console.log("this.cartDetails.products.price",this.cartDetails.products[i].price)
      //   this.totalPrice=this.totalPrice+parseFloat(this.cartDetails.products[i].price)*parseFloat(this.cartDetails.products[i].count);
      // }
      this.modal.open();
      this.dataservice.getUserWishListDetails().subscribe((res:any[])=>{
        this.wishListDetails=res;
        console.log("this.wishListDetails",this.wishListDetails.products);
      }) 
    })

  }
  addToCart(name,price,image,productID,sizesAvailable){
    this.dataservice.setProductDetails(name,price,image,productID,sizesAvailable);
    this.productDetailsModal.open();  

  }
}
