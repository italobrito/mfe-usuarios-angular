import { Injectable } from '@angular/core';

import { Usuario, UsuarioFormulario } from 'src/app/domain/entities/usuario';
import { UsuarioRepositoryInterface } from 'src/app/domain/interfaces/repositories/usuario-repository.interface';

@Injectable({ providedIn: 'root' })
export class CrudUsuarioRepository implements UsuarioRepositoryInterface {

  private usuarios: Usuario[] = [
    { id: 1, nome: 'João Silva', email: 'joao@email.com', tipoUsuario: 'A', status: 'A' },
    { id: 2, nome: 'Maria Oliveira', email: 'maria@email.com', tipoUsuario: 'C', status: 'I' },
    { id: 3, nome: 'Carlos Souza', email: 'carlos@email.com', tipoUsuario: 'A', status: 'A' },
  ];

  cadastrar(usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
    console.log('CrudUsuarioRepository CADASTRAR', usuario);
    usuario.id = this.usuarios.length + 1;
    this.usuarios.push({id: usuario.id, nome: usuario.informacoesPessoais.nomeCompleto, email: usuario.informacoesPessoais.email, tipoUsuario: usuario.informacoesProfissionais.tipoUsuario, status: usuario.informacoesProfissionais.status}); 
    return Promise.resolve(usuario);
  }

  atualizar(usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
    const index = this.usuarios.findIndex((u) => u.id === usuario.id);
    if (index !== -1) {
      this.usuarios[index] = {id: usuario.id, nome: usuario.informacoesPessoais.nomeCompleto, email: usuario.informacoesPessoais.email, tipoUsuario: usuario.informacoesProfissionais.tipoUsuario, status: usuario.informacoesProfissionais.status};
      return Promise.resolve(usuario);
    }
    return Promise.reject(new Error('Usuário não encontrado'));
  }

  deletar(usuarioId: number): Promise<void> {
    const index = this.usuarios.findIndex((u) => u.id === usuarioId);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      return Promise.resolve();
    }
    return Promise.reject(new Error('Usuário não encontrado'));
  }

  listar(): Promise<Usuario[]> {
    return Promise.resolve(this.usuarios);
  }
}