import { Routes } from '@angular/router';
import { Formarray } from '../dynamic-forms/formarray/formarray';
import { NospaceCustomValidation } from './custom-validator/nospace-custom-validation/nospace-custom-validation';
import { Switchmap } from './switchmap/switchmap';

export const routes: Routes = [
    {path:'',component:Formarray},
    {path:'nospace',component:NospaceCustomValidation},
    {path:'switchmap',component:Switchmap},
];
