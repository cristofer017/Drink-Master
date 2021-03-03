import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { Drink, DrinkService, StorageService } from 'app/core';


@Component({
  selector: 'drinks-slider',
  templateUrl: './drinks-slider.component.html',
  styleUrls: ['./drinks-slider.component.scss'],
})
export class DrinksSliderComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  slideOpts: {initialSlide: number; speed: number; slidesPerView: number};
  drinks: Array<Drink>;


  constructor(private readonly drinkService: DrinkService, private readonly storageService: StorageService) {
  }


  ngOnInit() {
    this.drinkService.getDrinks().pipe(take(1)).subscribe((drinks) => {
      this.drinks = drinks;
      this.initSlider();
    });
  }


  slidePrev() {
    this.slides.slidePrev();
  }


  slideNext() {
    this.slides.slideNext();
  }


  addDrinkTransaction(drink: Drink) {
    this.drinkService.setConsumableDrinks(drink);
  }


  private initSlider() {
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: 3,
    };
  }

}
