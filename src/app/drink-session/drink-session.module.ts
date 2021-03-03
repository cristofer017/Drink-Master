import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { DrinkSessionRoutingModule } from './drink-session-routing.module';

import { DrinksConsumedListComponent, DrinksConsumedRecordComponent, DrinksSliderComponent } from './components';
import { DrinkSessionComponent } from './pages';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DrinkSessionRoutingModule,
  ],
  declarations: [
    DrinksConsumedListComponent,
    DrinksConsumedRecordComponent,
    DrinksSliderComponent,
    DrinkSessionComponent,
  ],
})
export class DrinkSessionModule {

}
