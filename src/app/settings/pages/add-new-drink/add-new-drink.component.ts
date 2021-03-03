import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'add-new-drink',
  templateUrl: './add-new-drink.component.html',
})
export class AddNewDrinkComponent {

  formGroup: FormGroup;


  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      icon: ['', [Validators.required]],
      drinkName: ['', [Validators.required]],
      volume: [''],
      alcoholPercentage: ['']
    })
  }


  saveDrink() {

  }

}
