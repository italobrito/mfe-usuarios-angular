import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { DropdownType } from '@entities/dropdown-type';
import { TIPOS_USUARIOS } from '@shared/constants/tipos-usuarios';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './listar.component.html',
})
export class ListarComponent implements OnInit {
  
  private router: Router = inject(Router);

  usuarios: Array<any> = []; // Lista completa de usuários
  usuariosPaginados: Array<any> = []; // Lista de usuários para a página atual
  paginaAtual: number = 1;
  itensPorPagina: number = 5;
  totalPaginas: number = 0;
  paginas: Array<number> = [];

  filters = {
    nome: '',
    tipoUsuario: '',
  };

  listaTipoUsuario: Array<DropdownType> = TIPOS_USUARIOS;

  ngOnInit(): void {
    this.carregarUsuarios();
    this.atualizarPaginacao();
  }

  carregarUsuarios(): void {
    // Simulação de dados de usuários
    this.usuarios = [
      { nome: 'João Silva', email: 'joao@email.com', tipoUsuario: 'Admin', status: 'Ativo', id: 1 },
      { nome: 'Maria Oliveira', email: 'maria@email.com', tipoUsuario: 'Usuário', status: 'Inativo', id: 2  },
      { nome: 'Carlos Souza', email: 'carlos@email.com', tipoUsuario: 'Admin', status: 'Ativo', id: 3  },
      { nome: 'Ana Costa', email: 'ana@email.com', tipoUsuario: 'Usuário', status: 'Ativo', id: 4  },
      { nome: 'Pedro Lima', email: 'pedro@email.com', tipoUsuario: 'Usuário', status: 'Inativo', id: 5  },
      // ... Adicione mais usuários conforme necessário
    ];
  }

  aplicarFiltros(): void {
    const { nome, tipoUsuario } = this.filters;
    let usuariosFiltrados = this.usuarios;

    if (nome) {
      usuariosFiltrados = usuariosFiltrados.filter((usuario) =>
        usuario.nome.toLowerCase().includes(nome.toLowerCase())
      );
    }

    if (tipoUsuario) {
      usuariosFiltrados = usuariosFiltrados.filter(
        (usuario) => usuario.tipoUsuario === tipoUsuario
      );
    }

    this.usuariosPaginados = usuariosFiltrados;
    this.atualizarPaginacao();
  }

  atualizarPaginacao(): void {
    const totalItens = this.usuariosPaginados.length;
    this.totalPaginas = Math.ceil(totalItens / this.itensPorPagina);
    this.paginas = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
    this.alterarPagina(1);
  }

  alterarPagina(pagina: number): void {
    if (pagina < 1 || pagina > this.totalPaginas) {
      return;
    }

    this.paginaAtual = pagina;
    const inicio = (pagina - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.usuariosPaginados = this.usuarios.slice(inicio, fim);
  }

  editarUsuario(usuario: any): void {
    this.router.navigate([`/usuarios/atualizar/${usuario.id}`]);
  }

  deletarUsuario(usuario: any): void {
    this.router.navigate([`/usuarios/deletar/${usuario.id}`]);
  }

  removerUsuario(usuario: any): void {
    console.log('Remover usuário:', usuario);
    this.usuarios = this.usuarios.filter((u) => u !== usuario);
    this.aplicarFiltros();
  }
}
