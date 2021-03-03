import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { IonicModule } from '@ionic/angular';

import { AlcoholicStateService, DrinkService, StorageService } from './services';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class CoreModule {

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        AlcoholicStateService,
        DrinkService,
        StorageService,
      ],
    };
  }


  static forChild(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }

}
