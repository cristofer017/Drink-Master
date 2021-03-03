import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ng2-cookies';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

import { NativeStorageMock } from '../mocks';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule, IS_CORDOVA_DEFINED } from './core';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CoreModule.forRoot(),
  ],
  providers: [
    CookieService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: NativeStorage,
      useFactory: (cookieService: CookieService) => (IS_CORDOVA_DEFINED) ? new NativeStorage() : new NativeStorageMock(cookieService),
      deps: [CookieService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
