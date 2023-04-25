import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedFlag;
  public slides = [
    { src: "../../assets/Ethnic_Kurta_W.JPG" },
    { src: "../../assets/Ethnic_M.JPG" },
    { src: "../../assets/Women_Anarkali.JPG" },
    { src: "../../assets/Women_Slit_Dress.JPG" }
  ];
  constructor(readonly router:Router, private dataservice:DataService) {}

  ngOnInit() {
    this.loggedFlag=this.dataservice.getUserLoggedIn();
    console.log("home loggedin",this.loggedFlag)
  }
}
