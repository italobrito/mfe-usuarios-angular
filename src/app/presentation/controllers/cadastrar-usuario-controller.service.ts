import { Inject, Injectable } from '@angular/core';

import { UsuarioFormulario } from '@entities/usuario';

import { CadastrarUsuarioControllerInterface } from './interfaces/cadastrar-usuario-controller.interface';
import { CADASTRAR_USUARIO_USE_CASE, CadastrarUsuarioUseCaseInterface } from 'src/app/domain/interfaces/use-cases/cadastrar-usuario.use-case.interface';

@Injectable({
    providedIn: 'root'
})
export class CadastrarUsuarioControllerService implements CadastrarUsuarioControllerInterface {

    constructor(
        @Inject(CADASTRAR_USUARIO_USE_CASE) private cadastrarUseCase: CadastrarUsuarioUseCaseInterface
    ) { }

    cadastrar(usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
        return this.cadastrarUseCase.cadastrar(usuario);
    }
}
