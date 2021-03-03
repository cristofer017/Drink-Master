import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'drink-session',
  templateUrl: './drink-session.component.html',
  styleUrls: ['./drink-session.component.scss'],
})
export class DrinkSessionComponent implements OnInit {

  formGroup: FormGroup;


  constructor(private readonly fb: FormBuilder) { }


  ngOnInit() {
    this.formGroup = this.fb.group({
      consumedFood: ['none'],
    });
  }

}
