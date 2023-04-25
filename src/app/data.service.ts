import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts } from './Contacts'
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  fromChild=false;
  fromThird=false;
  userLoggedIn:boolean=false;

  //baseUrl:string="http://localhost:4200/assets/db.json";
  //url = `http://www.mocky.io/v2/5c5d880f3200000e11220880`;
  contacts = {
    'contactsList': [
        {'id': 1, 'name': 'Rajesh', 'city': 'bangalore'},
        {'id': 2, 'name': 'Aarjith', 'city': 'london'},
        {'id': 3, 'name': 'Anjan', 'city': 'california'},
        {'id': 4, 'name': 'David', 'city': 'delhi'}
    ]
  };
  constructor(private httpClient:HttpClient) { }
  getContacts():Observable<Contacts>
  {
    //return (this.httpClient.get<Contacts>(this.url));
    return of(this.contacts as Contacts);
  }
  users;
  validUser:boolean=false;
  userDetails={
    userID:"",
		username: "",
		password: "",
		gender:"",
		email:"",
		phoneNo:""
  }
  productDetails={
    productName:"",
    productPrice:"",
    productImage:"",
    productID:"",
    productSizesAvailable:[],
  };

  productName;
  productPrice;
  productImage;
  productID;
  productSizesAvailable;
  setProductDetails(name,price,image,productID,sizesAvailable){
    this.productDetails.productName=name;
    this.productDetails.productPrice=price;
    this.productDetails.productImage=image;
    this.productDetails.productID=productID;
    this.productDetails.productSizesAvailable=sizesAvailable;
    console.log("service productDetails",this.productDetails)
  }
  getProductDetails(){
    return this.productDetails;
  }
  setUserLoggedIn(){
    this.userLoggedIn=true;
  }
  getUsers(){
    return this.httpClient.get('/api/getProducts');
  }
  getCartDetails(){
    return this.httpClient.get('/api/cartDetails');
  }
  getUserCartDetails(){
    return this.httpClient.post('/api/getUserCartDetails',{userID:JSON.parse(localStorage.getItem("userDetails")).userID});
  }
  getWishListDetails(){
    return this.httpClient.get('/api/wishListDetails');
  }
  getUserWishListDetails(){
    return this.httpClient.post('/api/getUserWishListDetails',{userID:JSON.parse(localStorage.getItem("userDetails")).userID});
  }
  getProducts(){
    return this.httpClient.get('/api/products');
  }
  getOrders(){
    return this.httpClient.get('/api/orders');
  }
  getUserOrderDetails(){
    return this.httpClient.post('/api/getUserOrderDetails',{userID:JSON.parse(localStorage.getItem("userDetails")).userID});
  }
  cancelOrder(id){
    console.log("service caught id",id)
    return this.httpClient.post('/api/cancelOrder',{id:id});
  }
  addToWishList(name,price,productID,image,sizesAvailable){
    console.log("here in service")
    return this.httpClient.post('/api/addToWishList',{userID:JSON.parse(localStorage.getItem("userDetails")).userID,name:name,price:price,productID:productID,image:image,sizesAvailable:sizesAvailable});
  }
  addToCart(name,price,size,image,count,productID,sizesAvailable){
    return this.httpClient.post('/api/addTocart',{userID:JSON.parse(localStorage.getItem("userDetails")).userID,name:name,price:price,size:size,image:image,count:count, productID:productID,sizesAvailable:sizesAvailable});
  }
  decrementProductCount(cartID){
    return this.httpClient.post('/api/decrementProductCount',{cartID:cartID,userID:JSON.parse(localStorage.getItem("userDetails")).userID});
  }
  getTotalCartPrice(){
    return this.httpClient.post('/api/getTotalCartPrice',{userID:JSON.parse(localStorage.getItem("userDetails")).userID});
  }
  deleteProductFromCart(cartID){   
    return this.httpClient.post('/api/deleteProductFromCart',{cartID:cartID});
  }
  deleteProductFromWishList(wishListID){
    return this.httpClient.post('/api/deleteProductFromWishList',{wishListID:wishListID});
  }
  incrementProductCount(cartID){
    return this.httpClient.post('/api/incrementProductCount',{cartID:cartID,userID:JSON.parse(localStorage.getItem("userDetails")).userID});
  }
  incrementDuplicateItemInCart(cartID){
    return this.httpClient.post('/api/incrementDuplicateItemInCart',{cartID:cartID});
  }
  getUserLoggedIn(){
    
    return this.userLoggedIn;
  }
  // setUserDetails(userID,username,gender,email,phoneNo){
  //   this.userDetails.userID=userID,
  //   this.userDetails.username=username,
  //   this.userDetails.gender=gender,
  //   this.userDetails.email=email,
  //   this.userDetails.phoneNo=phoneNo
  // }
  // getUserDetails(){
  //   return this.userDetails;
  // }
}
