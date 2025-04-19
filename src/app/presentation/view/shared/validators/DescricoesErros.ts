import { FormControl } from "@angular/forms";

export const descricoesErros = {
    required: 'Campo obrigatório',
    minlength: 'Deve possuir pelo menos 3 caracteres',
    emailInvalido: 'E-mail inválido (Ex: abc@def.com)',
    dataFormatoPtBrInvalido: 'Data inválida (Ex: 01/01/2000)',
    dataFutura: 'A data de nascimento não pode ser no futuro ou inválida',
    idadeMaxima: 'A data não pode ser superior a 135 anos',
    idadeMinima: 'A data não pode ser inferior a 7 anos',
    telefoneInvalido: 'O telefone deve estar no formato (00) 0 0000 0000',
    cepInvalido: 'O CEP deve estar no formato 00000-000',
    cpfInvalido: 'O CPF está inválido',
} as any;

export function getMensagemErro(control: FormControl): string | null {
    for (const key in control.errors) {
        if (control.errors.hasOwnProperty(key)) {
            return descricoesErros[key];
        }
    }
    return null;
}
