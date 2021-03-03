import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { DrinkSessionRoutingModule } from './drink-session-routing.module';

import { DrinksConsumedListComponent, DrinksConsumedRecordComponent, DrinksSliderComponent, EditConsumedDrinksInfoModalComponent } from './components';
import { DrinkSessionComponent } from './pages';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    IonicModule,
    DrinkSessionRoutingModule,
  ],
  declarations: [
    DrinksConsumedListComponent,
    DrinksConsumedRecordComponent,
    DrinksSliderComponent,
    DrinkSessionComponent,
    EditConsumedDrinksInfoModalComponent,
  ],
})
export class DrinkSessionModule {

}
