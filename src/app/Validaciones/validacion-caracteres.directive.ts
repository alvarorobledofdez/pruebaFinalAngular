import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appValidacionCaracteres]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidacionCaracteresDirective, multi: true }]
})
export class ValidacionCaracteresDirective implements Validator{
  validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
    const dato = <string>control.value;

    if (!dato) {
      return;
    }
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error("Method not implemented.");
  }

  constructor() { }

}
