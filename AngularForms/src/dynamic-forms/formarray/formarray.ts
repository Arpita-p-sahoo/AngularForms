import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  imports: [ReactiveFormsModule],
  templateUrl: './formarray.html',
  styleUrl: './formarray.css',
})
export class Formarray {

  userForm = new FormGroup({
    phoneNumbers:new FormArray([
      new FormControl('',Validators.required)
    ])
  })
  
  get phoneNumbers() {
    return this.userForm.controls.phoneNumbers;
  }
  
  pushToFormArray(){
    this.userForm.controls.phoneNumbers.push(new FormControl(''));
  }
}
