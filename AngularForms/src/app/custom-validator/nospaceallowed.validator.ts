import { consumerDestroy } from "@angular/core/primitives/signals";
import { AbstractControl, FormControl } from "@angular/forms";



export class CustuomValidator {
    static noSpaceAllowed(control: AbstractControl) {
        if (control.value != null && control.value.indexOf(' ') !== -1) {
            return { noSpaceAllowed: true } // invalid
        }
        return null; //validated
    }
}