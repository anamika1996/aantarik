import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ModalComponent } from '../modal/modal.component';
import { ProductDetailsModalComponent } from '../product-details-modal/product-details-modal.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private dataservice:DataService) { }
productList;
cartDetails;
wishListDetails;
@ViewChild('modal') modal: ModalComponent;
@ViewChild('productDetailsModal') productDetailsModal: ProductDetailsModalComponent

  ngOnInit() {
    
    this.dataservice.getProducts().subscribe((res:any[])=>{
      this.productList=res;
      console.log("this.cartDetails",this.productList.products);
    })
  }
  addToWishList(name,price,productID,image,sizesAvailable){
    this.dataservice.addToWishList(name,price,productID,image,sizesAvailable).subscribe((res:any[])=>{
      this.wishListDetails=res;
      console.log("this.wishListDetails",this.wishListDetails.products);
      this.modal.open();
    })
  }
  addToCart(name,price,image,productID,sizesAvailable){
    // this.dataservice.addToCart(name,price,size,image,1).subscribe((res:any[])=>{
    //   this.cartDetails=res;
    //   console.log("this.cartDetails",this.cartDetails.products);
    //   this.modal.open();
    // })
    
  
  console.log("setTimeout() example...");
    this.dataservice.setProductDetails(name,price,image,productID,sizesAvailable);
    console.log("productID",productID);
    //setTimeout(function(){
      this.productDetailsModal.open();  
    //}, 8000);

  }
  openSizeModal(name,price,size,image){

  }
}
