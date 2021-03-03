import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { StorageService } from '../../../core/services';



@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {

  formGroup: FormGroup;


  constructor(
    private readonly storageService: StorageService,
    private readonly router: Router,
    formBuilder: FormBuilder,
  ) {
    this.formGroup = formBuilder.group({
      weight: ['', [Validators.required, Validators.min(30)]],
      height: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      birthYear: ['', [Validators.required, Validators.min(1930), Validators.max(2020)]],
    });
  }


  saveUserData() {
    this.storageService.setItem('userData', JSON.stringify(this.formGroup.value));
    this.router.navigate(['./drink-session']);
  }

}
