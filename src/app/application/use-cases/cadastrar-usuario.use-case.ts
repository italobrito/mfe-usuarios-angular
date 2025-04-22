import { Inject, Injectable } from '@angular/core';

import { UsuarioFormulario } from '@entities/usuario';
import { CadastrarUsuarioUseCaseInterface } from '../../domain/interfaces/use-cases/cadastrar-usuario.use-case.interface';
import { USUARIO_REPOSITORY, UsuarioRepositoryInterface } from '../../domain/interfaces/repositories/usuario-repository.interface';

@Injectable({
    providedIn: 'root'
})
export class CadastrarUsuarioUseCase implements CadastrarUsuarioUseCaseInterface {

    constructor(
        @Inject(USUARIO_REPOSITORY) private usuarioRepository: UsuarioRepositoryInterface
    ) { }

    cadastrar(usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
        console.log('CadastrarUsuarioUseCase', usuario);
        return this.usuarioRepository.cadastrar(usuario);
    }
}
