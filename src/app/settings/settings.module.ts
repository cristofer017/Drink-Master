import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  AddNewDrinkComponent,
  UserProfileComponent,
} from './pages';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [
    AddNewDrinkComponent,
    UserProfileComponent,
  ],
  providers: [],
  exports: [],
})
export class SettingsModule {
}
