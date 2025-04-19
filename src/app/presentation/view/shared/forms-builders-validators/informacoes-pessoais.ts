import { inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

import { dataPadraoBrasileiro } from "@shared/validators/ValidaDataNascimento";
import { validaEmail } from "@shared/validators/ValidaEmail";
import { validaTelefone } from "@shared/validators/ValidaTelefone";

export class InformacoesPessoaisFormBuilderValidators {
    // private static formBuilder = inject(FormBuilder);
    static getModel() {
      return {
        nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
        genero: ['', [Validators.required]],
        email: ['', [Validators.required, validaEmail()]],
        telefone: ['', [Validators.required, validaTelefone()]],
        dataNascimento: ['', [Validators.required, dataPadraoBrasileiro()]],
      };
    }
  }