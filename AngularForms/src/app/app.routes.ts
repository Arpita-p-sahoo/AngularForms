import { Routes } from '@angular/router';
import { Formarray } from '../dynamic-forms/formarray/formarray';
import { NospaceCustomValidation } from './custom-validator/nospace-custom-validation/nospace-custom-validation';
import { Switchmap } from './switchmap/switchmap';
import { ShoppingCartSignal } from './shopping-cart-signal/shopping-cart-signal';

export const routes: Routes = [
    {path:'',component:Formarray},
    {path:'nospace',component:NospaceCustomValidation},
    {path:'switchmap',component:Switchmap},
    {path:'signal',component:ShoppingCartSignal}
];
