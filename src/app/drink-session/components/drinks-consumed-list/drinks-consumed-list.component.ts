import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { Drink, DrinkService } from 'app/core';


@Component({
  selector: 'drinks-consumed-list',
  templateUrl: './drinks-consumed-list.component.html',
  styleUrls: ['./drinks-consumed-list.component.scss'],
})
export class DrinksConsumedListComponent implements OnInit {

  drinksConsumed: Array<Drink>;


  constructor(private readonly drinkService: DrinkService) {
    this.drinkService.getConsumedDrinks().pipe(take(1)).subscribe((drinks) => {
      this.drinksConsumed = drinks;
    });
  }


  ngOnInit() {
  }

}
