import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidacionTelefono]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidacionTelefonoDirective, multi: true }]
})
export class ValidacionTelefonoDirective implements Validator {
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {

    




    return null;
    }
    registerOnValidatorChange ? (fn: () => void): void {
      throw new Error("Method not implemented.");
    }

  constructor() { }


  }
