import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(
    readonly dataService:DataService,
    readonly router:Router
  ) { }

  ngOnInit() {
  }
func1()
{
  this.dataService.fromThird=true;
  this.router.navigateByUrl('/extra');
}
}
