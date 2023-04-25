import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnChanges {

  constructor(private dataservice:DataService) { }
cartDetails;
totalProductsCount;
totalPrice;
productDetails;
productList;
@ViewChild('modal') modal: ModalComponent

  ngOnInit() {

    this.dataservice.getUserCartDetails().subscribe((res:any[])=>{
      this.cartDetails=res;
      console.log("this.cartDetails",this.cartDetails.products);
      // for(let i in this.cartDetails.products){
      //   console.log("this.cartDetails.products.price",this.cartDetails.products[i].price)
      //   this.totalPrice=this.totalPrice+parseFloat(this.cartDetails.products[i].price)*parseFloat(this.cartDetails.products[i].count);
      // }
    })
    this.dataservice.getTotalCartPrice().subscribe((res:any[])=>{
      this.totalPrice=res;
      console.log("this.totalprice",res);
    })
    console.log("this.productDetails",this.productDetails)
  }
  ngOnChanges(){
  }
  sizeCount;
  increment(productID,cartID,size,cartCount){
    this.dataservice.getProducts().subscribe((res:any[])=>{
      this.productList=res;
      console.log("res",this.productList.products)
      for(let i of this.productList.products){
        console.log("i",i)
        if(i.productID==productID){
          for(let j of i.count){
            if(j.sizeName==size){
              this.sizeCount=j.sizeCount;
            }
          }
        }
      }
  //  })
  console.log("sizeCount",this.sizeCount)
      if(this.sizeCount>cartCount){
        this.dataservice.incrementProductCount(cartID).subscribe((res:any[])=>{
          this.dataservice.getUserCartDetails().subscribe((res:any[])=>{
            this.cartDetails=res;
            console.log("this.cartDetails",this.cartDetails.products);
          })
          this.dataservice.getTotalCartPrice().subscribe((res:any[])=>{
            this.totalPrice=res;
            console.log("this.totalprice",res);
          })    
        })
      }else{
        this.modal.open(); 
      }
      
   })  
    
  }
  wishListDetails;
  productAlreadyExistInWishlist:boolean=false;
  addToWishList(name,price,cartID,productID,image,sizesAvailable){
    this.dataservice.deleteProductFromCart(cartID).subscribe((res:any[])=>{
      this.dataservice.getUserCartDetails().subscribe((res:any[])=>{
        this.cartDetails=res;
        console.log("this.cartDetails",this.cartDetails.products);
        for(let i of this.cartDetails.products){
          console.log("i.userID",i.userID);
          console.log("i.productID",i.productID)
          console.log("localStorage.getItem('userDetails')).userID",JSON.parse(localStorage.getItem("userDetails")).userID)
          if(i.userID==JSON.parse(localStorage.getItem("userDetails")).userID){
            if(i.productID==productID){
              this.productAlreadyExistInWishlist=true;
            }
          }
        }
        if(!this.productAlreadyExistInWishlist){
          this.dataservice.addToWishList(name,price,productID,image,sizesAvailable).subscribe((res:any[])=>{
            this.wishListDetails=res;
            console.log("this.wishListDetails",this.wishListDetails.products);
            this.modal.open();
          })
        }
      }) 
    
  })
  }
  decrement(productCount, cartID){
    if(productCount==1){
      console.log("productCount",productCount);
      console.log("cartID",cartID)
      this.dataservice.deleteProductFromCart(cartID).subscribe((res:any[])=>{
        this.dataservice.getUserCartDetails().subscribe((res:any[])=>{
          this.cartDetails=res;
          console.log("this.cartDetails",this.cartDetails.products);
        }) 
        this.dataservice.getTotalCartPrice().subscribe((res:any[])=>{
          this.totalPrice=res;
          console.log("this.totalprice",res);
        })  
        this.modal.open(); 
      })
    }else{
      this.dataservice.decrementProductCount(cartID).subscribe((res:any[])=>{
        this.dataservice.getUserCartDetails().subscribe((res:any[])=>{
          this.cartDetails=res;
          console.log("this.cartDetails",this.cartDetails.products);
        }) 
        this.dataservice.getTotalCartPrice().subscribe((res:any[])=>{
          this.totalPrice=res;
          console.log("this.totalprice",res);
        })   
      })
    }
   
  }
}
