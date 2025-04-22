import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { descricoesErros } from './DescricoesErros';

export function validaTelefone(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const telefoneRegex = /^\(\d{2}\) \d \d{4} \d{4}$/;
    if (!telefoneRegex.test(value)) {
      return { telefoneInvalido: descricoesErros.telefoneInvalido };
    }
    return null;
  };
}