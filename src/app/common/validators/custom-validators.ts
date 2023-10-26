import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidateValue } from './currencyMax.validator';

export class CustomValidators {
    public static currencyMax(value:any): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            return ValidateValue(control.value, value) ? null : {value: true};
        }
    }
}