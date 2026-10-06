import { AbstractControl, FormControl } from "@angular/forms";

export const noSpaceAllowed = (control:AbstractControl) =>{
    if(control.value != null && control.value.indexOf(' ') !== -1){
        return {noSpaceAllowed:true} // invalid
    }
    return null; //validated
}