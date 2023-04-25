import { Component, OnInit, OnChanges, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnChanges {
orderDetails;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    this.dataservice.getUserOrderDetails().subscribe((res:any[])=>{
      this.orderDetails=res;
      console.log("this.cartDetails",this.orderDetails.orders);
    })
   
  }
  ngOnChanges(){
  }
  @ViewChild('modal') modal: ModalComponent

  openModal() {
    this.modal.open();
  }
  cancelOrder(id){
    console.log("id caught",id)
    this.dataservice.cancelOrder(id).subscribe((res:any[])=>{
      this.dataservice.getUserOrderDetails().subscribe((res:any[])=>{
        this.orderDetails=res;
        console.log("this.cartDetails",this.orderDetails.orders);
      })
      this.openModal()
    })
  }
}
