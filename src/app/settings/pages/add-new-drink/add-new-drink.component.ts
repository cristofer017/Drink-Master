import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DrinkService, StorageService } from '../../../core/services';


@Component({
  selector: 'add-new-drink',
  templateUrl: './add-new-drink.component.html',
  styleUrls: ['./add-new-drink.component.scss'],
})
export class AddNewDrinkComponent {

  formGroup: FormGroup;


  constructor(
    private readonly storageService: StorageService,
    private readonly drinkService: DrinkService,
    private readonly router: Router,
    formBuilder: FormBuilder,
  ) {
    this.formGroup = formBuilder.group({
      icon: ['', [Validators.required]],
      name: ['', [Validators.required]],
      alcVolume: [''],
      alcPercentage: [''],
    });
  }


  saveDrink() {
    this.drinkService.setDrinks(this.formGroup.value);
    this.router.navigate(['./drink-session']);
  }

}
