import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ModalController } from '@ionic/angular';


@Component({
  selector: 'edit-consumed-drinks-info-modal',
  templateUrl: './edit-consumed-drinks-info-modal.component.html',
  styleUrls: ['./edit-consumed-drinks-info-modal.component.scss'],
})
export class EditConsumedDrinksInfoModalComponent implements OnInit {

  @Input() date: string;
  @Input() alcVolume: number;
  @Input() alcPercentage: number;

  formGroup: FormGroup;


  constructor(private readonly modalController: ModalController, private readonly formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      date: ['', [Validators.required]],
      alcVolume: ['', [Validators.required]],
      alcPercentage: ['', [Validators.required]],
    });

  }


  ngOnInit() {
    this.setDataToForm();
  }


  setDataToForm() {
    this.formGroup.get('date').setValue(this.date);
    this.formGroup.get('alcVolume').setValue(this.alcVolume);
    this.formGroup.get('alcPercentage').setValue(this.alcPercentage);
  }


  close() {
    this.modalController.dismiss(this.formGroup.value);
  }

}
