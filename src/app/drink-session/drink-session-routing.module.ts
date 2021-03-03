import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DrinkSessionComponent } from './pages';


const routes: Routes = [
  {
    path: 'drink-session',
    component: DrinkSessionComponent,
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

export class DrinkSessionRoutingModule {
}
