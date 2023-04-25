import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Product } from '../product';
import { Contacts,Contact} from '../Contacts'
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private products:Product[]=[];
  contacts:Contact[];
  constructor(private dataservice:DataService,
    readonly router:Router,
  ) { 
    // this.getProducts();
  }
  ngOnInit() {
    this.dataservice.getContacts().subscribe((res)=>{
      console.log("res",res);
      this.contacts=res.contactsList;
    });
  }
// func()
// {
//   this.dataservice.fromChild=true;
//   this.router.navigateByUrl('/parent');
// }
// func1()
// {
//   this.router.navigateByUrl('/third');
// }
// getProducts()
// {
  // this.dataservice.getContacts().subscribe((res:any[])=>{
  //   this.products=res;
  //   console.log(res);
  //   console.log(this.products["products"][0].name);
  // })
//}
}
