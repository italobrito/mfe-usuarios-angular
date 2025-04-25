import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

import { descricoesErros } from './DescricoesErros';

export function validaCpf(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cpf = control.value;

    if (!cpf) {
      return { cpfInvalido: descricoesErros.cpfInvalido }; // CPF vazio
    }

    // Remove caracteres não numéricos
    const cpfLimpo = cpf.replace(/\D/g, '');

    // Verifica se o CPF tem 11 dígitos
    if (cpfLimpo.length !== 11) {
      return { cpfInvalido: descricoesErros.cpfInvalido };
    }

    // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
    if (/^(\d)\1+$/.test(cpfLimpo)) {
      return { cpfInvalido: descricoesErros.cpfInvalido };
    }

    // Validação dos dígitos verificadores
    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
      soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpfLimpo.substring(9, 10))) {
      return { cpfInvalido: descricoesErros.cpfInvalido };
    }

    soma = 0;
    for (let i = 1; i <= 10; i++) {
      soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) {
      resto = 0;
    }
    if (resto !== parseInt(cpfLimpo.substring(10, 11))) {
      return { cpfInvalido: descricoesErros.cpfInvalido };
    }

    return null; // CPF válido
  };
}