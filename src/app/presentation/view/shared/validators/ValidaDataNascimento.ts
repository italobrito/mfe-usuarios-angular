import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { descricoesErros } from "./DescricoesErros";

export function dataPadraoBrasileiro(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    console.log('value = ',value)
    if (!value || value.length !== 10) {
      return { dataFormatoPtBrInvalido: descricoesErros.dataFormatoPtBrInvalido };
    }
    const [day, month, year] = value.split('/');
    const data = new Date(`${year}-${month}-${day}`);
    const today = new Date();
    if (data > today) {
      return { dataFutura: descricoesErros.dataFutura };
    }
    const idadeMaxima = new Date(today.getFullYear() - 135, today.getMonth(), today.getDate());
    if (data < idadeMaxima) {
      return { idadeMaxima: descricoesErros.idadeMaxima };
    }
    const idadeMinima = new Date(today.getFullYear() - 7, today.getMonth(), today.getDate());
    if (data > idadeMinima) {
      return { idadeMinima: idadeMinima };
    }
    return null;
  };
}
