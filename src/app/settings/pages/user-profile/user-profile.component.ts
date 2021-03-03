import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {

  formGroup: FormGroup;


  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      weight: ['', [Validators.required]],
      height: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthYear: ['', [Validators.required]],
    })
  }


  saveUserData() {

  }

}
