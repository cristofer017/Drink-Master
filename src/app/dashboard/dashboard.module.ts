import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './pages';
import { ProgressBarComponent, SettingsActionsComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
  ],
  declarations: [
    DashboardPage,
    ProgressBarComponent,
    SettingsActionsComponent,
  ]
})
export class DashboardPageModule {}
