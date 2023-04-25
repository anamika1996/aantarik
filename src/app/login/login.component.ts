import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username;
  password;
  constructor(private router: Router, private dataservice:DataService) { }
  ngOnInit() {
  }
  users;
  userDetails={
    userID:"",
		username: "",
		password: "",
		gender:"",
		email:"",
		phoneNo:""
  };
  submit() {
    console.log("username", this.username);
    console.log("password", this.password);
    this.dataservice.getUsers().subscribe((res:any[])=>{
      this.users=res;
      for(let i of this.users["users"]){
        if(i.username==this.username && i.password==this.password){
          this.router.navigateByUrl("/home")          
          this.dataservice.setUserLoggedIn();
          this.userDetails.userID=i.userID;
          this.userDetails.username=i.username;
          this.userDetails.gender=i.gender;
          this.userDetails.phoneNo=i.phoneNo;

          localStorage.setItem("userDetails", JSON.stringify(this.userDetails));
          console.log(JSON.parse(localStorage.getItem("userDetails")).userID)
          //this.dataservice.setUserDetails(i.userID,i.username,i.gender,i.email,i.phoneNo)
          break;
        }
      }
    })
    }
  }
