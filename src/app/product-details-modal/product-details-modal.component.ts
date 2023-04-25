import { Component, OnInit, ViewChild, ElementRef, Input, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.css']
})
export class ProductDetailsModalComponent implements OnInit, OnChanges {

  constructor(private dataservice:DataService, readonly router:Router) {
    console.log("modal productDetails",this.productDetails)
   }
  productDetails;
  ngOnInit() {
    this.productDetails=this.dataservice.getProductDetails();
    console.log("modal onChanges productDetails",this.productDetails);
  }
  @ViewChild('productDetailsModal') productDetailsModal: ElementRef;
  // @Input() name:string;
  // @Input() price:string;
  // @Input() image:string;
  // @Input() productID:string;
  // @Input() sizesAvailable;
  
  ngOnChanges(){
    this.productDetails=this.dataservice.getProductDetails();
    console.log("modal onChanges productDetails",this.productDetails);
  }
  cartDetails;
  open() {
    this.productDetails=this.dataservice.getProductDetails();
    console.log("open modal productDetails",this.productDetails);
    this.productDetailsModal.nativeElement.style.display = 'block';
  }

  close() {
    this.productDetailsModal.nativeElement.style.display = 'none';
  }
  oldCartDetails;
  newCartDetails;
  incremented:boolean=false;
  getSize(size){
    this.productDetails=this.dataservice.getProductDetails();
    console.log("modal productDetails",this.productDetails);
    console.log("productID called",this.productDetails.productID);
    this.dataservice.getUserCartDetails().subscribe((res:any[])=>{
      this.oldCartDetails=res;
      for(let i of this.oldCartDetails.products){
        if(i.productID == this.productDetails.productID && i.size==size){

          console.log("here in if");
          console.log("i.cartID",i.cartID)
          this.dataservice.incrementProductCount(i.cartID).subscribe((res:any[])=>{
            this.newCartDetails=res;
            console.log("this.newCartDetails",this.newCartDetails.products);
          })
          this.router.navigateByUrl('/cart');
          this.incremented=true;
          break;
        }
        else{
          // console.log("here in else ")
          // this.dataservice.addToCart(this.name,this.price,size,this.image,"1",this.productID).subscribe((res:any[])=>{
          //   this.cartDetails=res;
          //   console.log("this.cartDetails",this.cartDetails.products);
          // })
          // this.router.navigateByUrl('/cart');
          // break;
        }
      }
      if(this.incremented==false){
     console.log("here in else ");
     console.log("at the time of incrementingthis.productDetails",this.productDetails)
          this.dataservice.addToCart(this.productDetails.productName,this.productDetails.productPrice,size,this.productDetails.productImage,"1",this.productDetails.productID,this.productDetails.productSizesAvailable).subscribe((res:any[])=>{
            this.dataservice.getUserCartDetails().subscribe((res:any[])=>{
              this.cartDetails=res;
              console.log("this.cartDetails",this.cartDetails.products);
            }) 
          })
          this.router.navigateByUrl('/cart');
        }          
    })

  }
  
}
