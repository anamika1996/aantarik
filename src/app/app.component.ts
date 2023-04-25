import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /** create a form (contactForm) with following controls/groups and  validations
   *    - name: control,    valiations: required
   *    - phone: control,   validations: required, number of 10 digits
   *    - address: group
   *      - street: control
   *      - city: control
   *      - zip: number of 6 digits
   */
buttonColor="black";
buttonType="buy";
isCustomSize=250;
buttonHeight=50;
isTop=window===window.top;

paymentRequest ={
  apiVersion:2,
  apiVersionMinor:0,
  allowedPaymentMethods:[
    {type:"CARD",
    parameters:{
      allowedPaymentMethods:["PAN_ONLY","CRYPTOGRAM_3DS"],
      allowedCardNetworks:["AMEX","VISA","MASTERCARD"]
    },
    tokenizationSpecification:{
      type:"PAYMENT_GATEWAY",
      parameters:{
        gateway:"example",
        gatewayMerchantID:"exampleGatewayMerchatId"
      }
    }

  }

  ],
  merchantInfo:{
    merchantId:"12345678901234567890",
    merchantName:"demo Merchant"
  },
  transactionInfo:{
    totalPriceStatus:"FINAL",
    totalPriceLabel:"Total",
    totalPrice:"100.00",
    currencyCode:"USD",
    countryCode:"US"
  }

};
onLoadPaymentData(event:any):void{
  console.log("payment gateway details",event.details);
}
  contactForm = new FormGroup({
    name:new FormControl('',Validators.required),
    phone:new FormControl('',[Validators.required, Validators.minLength(10),Validators.maxLength(10), Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    address: new FormGroup({
      street:new FormControl(''),
      city:new FormControl(''),
      zip:new FormControl('',[Validators.minLength(6),Validators.maxLength(6),Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
    })

  });

  onSubmit() {
    console.log('form value =>', this.contactForm.value);
  }

  get name() { return this.contactForm.get('name'); }
  get phone() { return this.contactForm.get('phone'); }
  get zip() { return this.contactForm.controls['address'].get('zip'); }
}
