import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { descricoesErros } from './DescricoesErros';

export function validaCep(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const cepRegex = /^\d{5}-\d{3}$/;
    console.log('value = ', value); 
    if (!cepRegex.test(value)) {
      return { cepInvalido: descricoesErros.cepInvalido };
    }
    return null;
  };
}