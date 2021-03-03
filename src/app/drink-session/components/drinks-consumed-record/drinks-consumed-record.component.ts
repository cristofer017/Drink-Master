import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

import { EditConsumedDrinksInfoModalComponent } from '../edit-consumed-drinks-info-modal/edit-consumed-drinks-info-modal.component';


@Component({
  selector: 'drinks-consumed-record',
  templateUrl: './drinks-consumed-record.component.html',
  styleUrls: ['./drinks-consumed-record.component.scss'],
})
export class DrinksConsumedRecordComponent implements OnInit {

  @Input() item: {date: string; icon: string; alcVolume: string; alcPercentage: number};

  itemDetails: {date: string; icon: string; alcVolume: string; alcPercentage: number};


  constructor(private readonly modalController: ModalController, private readonly popoverController: PopoverController) {
  }


  ngOnInit() {
    this.itemDetails = this.item;
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: EditConsumedDrinksInfoModalComponent,
      componentProps: this.itemDetails,
      cssClass: 'drinks-record-modal',
    });

    modal.onDidDismiss()
      .then((formValue) => {
        this.itemDetails = formValue.data;
      });

    return await modal.present();
  }

}
