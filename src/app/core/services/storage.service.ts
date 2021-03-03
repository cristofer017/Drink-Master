import { from, Observable} from 'rxjs';
import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage/ngx';


@Injectable()
export class StorageService {

  constructor(private readonly nativeStorage: NativeStorage) {
  }


  getItem(key: string): Observable<string> {
    return from(this.nativeStorage.getItem(key));
  }


  setItem(key: string, value: string) {
    this.nativeStorage.setItem(key, value);
  }

}
