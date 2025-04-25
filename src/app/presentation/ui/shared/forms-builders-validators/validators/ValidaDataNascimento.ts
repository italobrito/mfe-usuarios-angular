import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

import { descricoesErros } from "./DescricoesErros";

export function dataPadraoBrasileiro(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;
    const [day, month, year] = value.split('/');
    const data = new Date(`${year}-${month}-${day}`);
    const today = new Date();

    // Verifica se a data está no formato válido (DD/MM/AAAA)
    if (!value || data.toString() === 'Invalid Date') { 
      return { dataFormatoPtBrInvalido: descricoesErros.dataFormatoPtBrInvalido };
    }

    //Não pode ser uma data futura
    if (data > today) {
      return { dataFutura: descricoesErros.dataFutura };
    }

    // Idade máxima de 135 anos e mínima de 7 anos
    const idadeMaxima = new Date(today.getFullYear() - 136, today.getMonth(), today.getDate());
    if (data < idadeMaxima) {
      return { idadeMaxima: descricoesErros.idadeMaxima };
    }
    
    const idadeMinima = new Date(today.getFullYear() - 8, today.getMonth(), today.getDate());
    if (data > idadeMinima) {
      return { idadeMinima: idadeMinima };
    }
    return null;
  };
}
