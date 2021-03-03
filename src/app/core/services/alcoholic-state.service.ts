import { Injectable } from '@angular/core';

import { ALCOHOL_LEVELS } from '../types';
import { AlcoholLevel, DrinkItem, UserData } from '../structures';


@Injectable()
export class AlcoholicStateService {

  calc(drinkUses: Array<DrinkItem>, userData: UserData, timeOffsetHours: number, foodIndex: number): string {
    const totalConsumedAlcoholMass = this.calcTotalAlcoholMass(drinkUses);
    const alcoholIndicator = this.calcAlcoholIndicator(userData, totalConsumedAlcoholMass, timeOffsetHours, foodIndex);
    const level = this.identifyLevel(alcoholIndicator);

    return (level.state);
  }


  private calcTotalAlcoholMass(drinkUses: Array<DrinkItem>): number {
    let total = 0;
    drinkUses.forEach((drinkItem: DrinkItem) => {
      total += this.calcAlcoholMass(drinkItem);
    });

    return total;
  }


  private calcAlcoholMass(drinkItem: DrinkItem): number {
    const mass = (drinkItem.amount * drinkItem.alcoholPercentage) / 100;

    return mass;
  }


  private calcAlcoholIndicator(userData: UserData, totalConsumedAlcoholMass: number, timeOffsetHours: number, foodIndex: number) {
    const weightSexConstant = (userData.men ? 0.68 : 0.55);
    const timeSexConstant = (userData.men ? 0.015 : 0.017);
    const result = (
      ((totalConsumedAlcoholMass * 100) / (userData.weight * weightSexConstant) - (timeSexConstant * timeOffsetHours)) * foodIndex * 1000
    );

    return result;
  }


  private identifyLevel(indicator: number): AlcoholLevel {
    if (indicator <= 0) {
      return undefined;
    }

    let currentLevel = ALCOHOL_LEVELS.find((level: AlcoholLevel) => {
      return (indicator >= level.range.min && indicator <= level.range.max);
    });

    if (!currentLevel) {
      currentLevel = ALCOHOL_LEVELS[ALCOHOL_LEVELS.length - 1];
    }

    return currentLevel;
  }

}
