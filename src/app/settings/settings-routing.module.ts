import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddNewDrinkComponent, UserProfileComponent } from './pages';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'user-data',
        component: UserProfileComponent,
      },
      {
        path: 'add-drink',
        component: AddNewDrinkComponent,
      }
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class SettingsRoutingModule {
}
