import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './pages';
import {
  DrinksConsumedListComponent,
  DrinksConsumedRecordComponent,
  ProgressBarComponent,
  SettingsActionsComponent
} from './components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
  ],
  declarations: [
    DashboardPage,
    DrinksConsumedListComponent,
    DrinksConsumedRecordComponent,
    ProgressBarComponent,
    SettingsActionsComponent,
  ]
})
export class DashboardPageModule {}
