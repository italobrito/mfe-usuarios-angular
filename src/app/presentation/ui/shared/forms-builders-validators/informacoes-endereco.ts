import { Validators } from "@angular/forms";

import { validaCep } from "src/app/presentation/ui/shared/forms-builders-validators/validators/ValidaCep";

export class EnderecoFormBuilderValidators {
    static getModel() {
      return {
        rua: ['', [Validators.required, Validators.minLength(3)]],
        numero: ['', [Validators.required]],
        complemento: ['', [Validators.required]],
        bairro: ['', [Validators.required, Validators.minLength(3)]],
        cidade: ['', [Validators.required, Validators.minLength(3)]],
        estado: ['', [Validators.required]],
        cep: ['', [Validators.required, validaCep()]],
      };
    }
  }