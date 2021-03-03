import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../../../core/services';
import { Router } from '@angular/router';



@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
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
      birthYear: ['', [Validators.required, Validators.min(1950), Validators.max(2020)]],
    })
  }


  saveUserData() {
    this.storageService.setItem('userData', JSON.stringify(this.formGroup.value));
    this.router.navigate(['./dashboard']);
  }

}
