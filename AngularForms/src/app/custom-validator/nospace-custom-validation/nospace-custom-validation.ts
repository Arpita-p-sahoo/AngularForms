import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { noSpaceAllowed } from '../nospaceallowed.validator';

@Component({
  selector: 'app-nospace-custom-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './nospace-custom-validation.html',
  styleUrl: './nospace-custom-validation.css',
})
export class NospaceCustomValidation {
  
  employeeRegForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    firstName:new FormControl('',[Validators.required,noSpaceAllowed]),
    lastName:new FormControl('',Validators.required),
    phNo:new FormControl('',Validators.required),
    company: new FormControl('',Validators.required)
  })

  SubmitEmployee(){
    // if (this.employeeRegForm.invalid) {
    //   this.employeeRegForm.markAllAsTouched();
    //   return;
    // }
    console.log(this.employeeRegForm.controls);

  }
}
