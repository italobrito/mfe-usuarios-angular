import { Validators } from "@angular/forms";

import { dataPadraoBrasileiro } from "./validators/ValidaDataNascimento";

export class InformacoesProfissionaisFormBuilderValidators {
    static getModel() {
        return {
            cargo: ['', [Validators.required]],
            setor: ['', [Validators.required]],
            dataAdmissao: ['', [Validators.required, dataPadraoBrasileiro()]],
            tipoUsuario: ['', [Validators.required]],
            temaPreferido: ['', [Validators.required]],
            status: ['', [Validators.required]],
        };
    }
}