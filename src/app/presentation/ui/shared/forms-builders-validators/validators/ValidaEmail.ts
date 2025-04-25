import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { descricoesErros } from './DescricoesErros';

export function validaEmail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      return { emailInvalido: descricoesErros.emailInvalido };
    }
    return null;
  };
}