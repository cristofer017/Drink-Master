import { Component, Input } from '@angular/core';

import { ModalController } from '@ionic/angular';

import { Drink, StorageService } from 'app/core';

import { EditConsumedDrinksInfoModalComponent } from '../edit-consumed-drinks-info-modal/edit-consumed-drinks-info-modal.component';


@Component({
  selector: 'drinks-consumed-record',
  templateUrl: './drinks-consumed-record.component.html',
  styleUrls: ['./drinks-consumed-record.component.scss'],
})
export class DrinksConsumedRecordComponent {

  @Input() item: Drink;


  constructor(private readonly modalController: ModalController, private readonly storageService: StorageService) {
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: EditConsumedDrinksInfoModalComponent,
      componentProps: this.item,
      cssClass: 'drinks-record-modal',
    });

    modal.onDidDismiss()
      .then((formValue) => {
        this.storageService.setItem('drinksConsumed', JSON.stringify(formValue.data));
      });

    return await modal.present();
  }

}
