import { AbstractControl, ValidationErrors } from '../../../node_modules/@angular/forms';

export class UsernameValidator{

    static canNotContainSpaces(control:AbstractControl):ValidationErrors |null{
        if((control.value as string).indexOf(' ')>=0){
            return {
                canNotContainSpace:true,
            };
        }
        return null
    }}