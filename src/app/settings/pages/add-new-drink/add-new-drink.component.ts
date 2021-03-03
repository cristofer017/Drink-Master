import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StorageService } from '../../../core/services';


@Component({
  selector: 'add-new-drink',
  templateUrl: './add-new-drink.component.html',
})
export class AddNewDrinkComponent {

  formGroup: FormGroup;


  constructor(
    private readonly storageService: StorageService,
    private readonly router: Router,
    formBuilder: FormBuilder,
  ) {
    this.formGroup = formBuilder.group({
      // icon: ['', [Validators.required]],
      name: ['', [Validators.required]],
      alcVolume: [''],
      alcPercentage: [''],
    })
  }


  saveDrink() {
    this.storageService.getItem('drinks').subscribe((data: string) => {
      const drinkList = JSON.parse(data);
      drinkList.push(this.formGroup.value);

      this.storageService.setItem('drinks', JSON.stringify(drinkList));
    });
    this.router.navigate(['./dashboard']);
  }

}
