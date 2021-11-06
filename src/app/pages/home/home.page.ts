import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlide, IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSlides) slides :IonSlides;

  constructor() { }

  ngOnInit() {
  }

  next(){
    this.slides.slideNext();
  }
}
