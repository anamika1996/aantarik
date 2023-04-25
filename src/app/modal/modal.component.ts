import { Component, OnInit, ViewChild, ElementRef,Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  template: `
    <div #myModal class="container">
    <div class="content">
      <p [innerHtml]="modalBody"></p>
      <button (click)="close()">Close</button>
    </div>
    </div>
  `,
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    constructor(private router: Router) { }
@Input() modalBody:string;
  @ViewChild('myModal') modal: ElementRef;

  open() {
    this.modal.nativeElement.style.display = 'block';
  }

  close() {
    this.modal.nativeElement.style.display = 'none';
  }
}