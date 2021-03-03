import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'consumed-food',
  templateUrl: './consumed-food.component.html',
  styleUrls: ['./consumed-food.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ConsumedFoodComponent),
      multi: true,
    },
  ],
})
export class ConsumedFoodComponent implements OnInit, ControlValueAccessor {

  formGroup: FormGroup;
  private propagateChange: (value: any) => void;


  constructor(private readonly fb: FormBuilder) {
    this.propagateChange = () => {};
  }


  ngOnInit() {
    this.formGroup = this.fb.group({
      consumedFood: [''],
    });

    this.formGroup.valueChanges.subscribe((value) => {
      this.propagateChange(value.consumedFood);
    });
  }


  writeValue(value: any) {
    if (value) {
      this.formGroup.setValue({
        consumedFood: value
      });
    } else {
      this.formGroup.reset();
    }
  }


  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }


  registerOnTouched(fn: any) {
  }


  setDisabledState(isDisabled: boolean) {
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

}
