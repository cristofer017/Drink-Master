import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Drink } from '../structures';
import { StorageService } from './storage.service';


@Injectable()
export class DrinkService {

  constructor(private readonly storageService: StorageService) {
  }


  getDrinks(): Observable<Array<Drink>> {
    return this.storageService.getItem('drinks').pipe(
      switchMap((data: string) => {
        const drinks: Array<Drink> = data ? JSON.parse(data) : [];

        return of(drinks);
      }),
    );
  }


  setDrinks(drink: Drink) {
    this.getDrinks().subscribe((data) => {
      const drinkList = data;
      drinkList.push(drink);

      this.storageService.setItem('drinks', JSON.stringify(drinkList));
    });
  }


  getConsumedDrinks(): Observable<Array<Drink>> {
    return this.storageService.getItem('drinksConsumed').pipe(
      switchMap((data: string) => {
        const drinks: Array<Drink> = data ? JSON.parse(data) : [];

        return of(drinks);
      }),
    );
  }

  setConsumableDrinks(drink: Drink) {
    this.getDrinks().subscribe((data) => {
      const drinksConsumedList = data;
      drinksConsumedList.push(drink);

      this.storageService.setItem('drinksConsumed', JSON.stringify(drinksConsumedList));
    });
  }

}
