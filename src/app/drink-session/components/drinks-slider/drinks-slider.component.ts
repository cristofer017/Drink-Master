import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { Drink, DrinkService } from 'app/core';


@Component({
  selector: 'drinks-slider',
  templateUrl: './drinks-slider.component.html',
  styleUrls: ['./drinks-slider.component.scss'],
})
export class DrinksSliderComponent implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  slideOpts: {initialSlide: number; speed: number; slidesPerView: number};
  drinks: Array<Drink>;

  constructor(private readonly drinkService: DrinkService) {
  }


  ngOnInit() {
    this.drinkService.getDrinks().pipe(take(1)).subscribe((drinks) => {
      this.drinks = drinks;
      this.initSlider();
    });
    // this.drinks = [
    //   {
    //     icon: 'beer',
    //     name: 'beer',
    //     alcVolume: 0.5,
    //     alcPercentage: 4.5,
    //   },
    //   {
    //     icon: 'vin',
    //     name: 'vin',
    //     alcVolume: 0.1,
    //     alcPercentage: 12,
    //   },
    //   {
    //     icon: 'sampanie',
    //     name: 'Sampanie',
    //     alcVolume: 0.1,
    //     alcPercentage: 13,
    //   },
    //   {
    //     icon: 'sampanie',
    //     name: 'sampanie 2',
    //     alcVolume: 0.1,
    //     alcPercentage: 20,
    //   },
    //   {
    //     icon: 'beer',
    //     name: 'bere2',
    //     alcVolume: 0.1,
    //     alcPercentage: 20,
    //   },
    // ];
  }


  slidePrev() {
    this.slides.slidePrev();
  }

  slideNext() {
    this.slides.slideNext();
  }


  private initSlider() {
    this.slideOpts = {
      initialSlide: 0,
      speed: 400,
      slidesPerView: 3,
    };
  }

}
