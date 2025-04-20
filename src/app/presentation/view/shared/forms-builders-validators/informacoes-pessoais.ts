import { Validators } from "@angular/forms";

import { validaCpf } from "@shared/forms-builders-validators/validators/ValidaCpf";
import { dataPadraoBrasileiro } from "@shared/forms-builders-validators/validators/ValidaDataNascimento";
import { validaEmail } from "@shared/forms-builders-validators/validators/ValidaEmail";
import { validaTelefone } from "@shared/forms-builders-validators/validators/ValidaTelefone";

export class InformacoesPessoaisFormBuilderValidators {
    static getModel() {
      return {
        nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
        genero: ['', [Validators.required]],
        email: ['', [Validators.required, validaEmail()]],
        telefone: ['', [Validators.required, validaTelefone()]],
        dataNascimento: ['', [Validators.required, dataPadraoBrasileiro()]],
        cpf: ['', [Validators.required, validaCpf()]],
        rg: ['', [Validators.required]],
      };
    }
  }