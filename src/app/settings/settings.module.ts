import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from '../core';
import {
  AddNewDrinkComponent,
  UserProfileComponent,
} from './pages';
import { IonicModule } from '@ionic/angular';
import { SettingsRoutingModule } from './settings-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CoreModule,
    SettingsRoutingModule,
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
