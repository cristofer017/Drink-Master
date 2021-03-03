import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { DrinkSessionRoutingModule } from './drink-session-routing.module';

import { DrinksConsumedListComponent, DrinksConsumedRecordComponent } from './components';
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
    DrinkSessionComponent,
  ],
})
export class DrinkSessionModule {

}
