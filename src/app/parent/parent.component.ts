import { Component, OnInit } from '@angular/core';
import { Contacts,Contact} from '../Contacts'
import { DataService } from '../data.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  contacts:Contact[];
  constructor(private dataservice:DataService,
  ) { 
    // this.getProducts();
  }
  ngOnInit() {
    this.dataservice.getContacts().subscribe((res)=>{
      console.log("res",res);
      this.contacts=res.contactsList;
    });
  }
}
