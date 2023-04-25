import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, style, animate, useAnimation } from "@angular/animations";
import {
  fadeIn,
  fadeOut,
} from "../caraousel.animations";

@Component({
  selector: 'app-caraousel',
  templateUrl: './caraousel.component.html',
  styleUrls: ['./caraousel.component.scss'],
  animations: [
    trigger("carouselAnimation", [
      transition("void => *", [useAnimation(fadeIn, {params: { time: '1300ms' }} )]),
      transition("* => void", [useAnimation(fadeOut, {params: { time: '1300ms' }})]),
    ])
  ]
})
export class CaraouselComponent implements OnInit {

  constructor() { }
  @Input() slides;
  currentSlide = 0;

  ngOnInit() {
  }
  onPreviousClick() {
    const previous = this.currentSlide - 1;
    this.currentSlide = previous < 0 ? this.slides.length - 1 : previous;
    console.log("previous clicked, new current slide is: ", this.currentSlide);
  }

  onNextClick() {
    const next = this.currentSlide + 1;
    this.currentSlide = next === this.slides.length ? 0 : next;
    console.log("next clicked, new current slide is: ", this.currentSlide);
  }

}
