import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesListAbstractComponent } from '@shared/components/forms/abstracts-components/pages-list-abstract.component';

import { BtpDropdownComponent } from '@shared/components/inputs/btn-dropdown/btp-dropdown.component';
import { BtnInputComponent } from '@shared/components/inputs/btn-input/btn-input.component';
import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';
import { PaginacaoComponent } from '@shared/components/paginacao/paginacao.component';

import { DropdownType } from '@entities/dropdown-type';
import { Usuario } from '@entities/usuario';

import { TIPOS_USUARIOS } from '@shared/constants/tipos-usuarios';
import { TIPOS_STATUS_USUARIO } from '@shared/constants/tipos-status-usuario';

import { MapearValorLabelPipe } from '@shared/pipes/mapear-valor-label-pipe';

import { filtrarPorPropriedades } from '@shared/utils/filtro-generico';
import { removeAcentos } from '@shared/utils/remove-acentos';

import { ListarUsuariosProvidersModule } from '@shared/providers/listar-usuarios-providers.module';
import { LISTAR_USUARIOS_CONTROLLER, ListarUsuariosControllerInterface } from '@domain/interfaces/controllers/listar-usuario-controller.interface';

import { BtnVoltarDirective } from '@shared/directives/btn-voltar.directive';
import { BtnAtualizarDirective } from '@shared/directives/btn-atualizar.directive';
import { BtnDeletarDirective } from '@shared/directives/btn-deletar.directive';
import { BtnVisualizarDirective } from '@shared/directives/btn-visualizar.directive';

@Component({
  selector: 'app-listar-usuarios',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    BtnInputComponent,
    BtpDropdownComponent,
    MapearValorLabelPipe,
    NotificadorMensagensComponent,
    ListarUsuariosProvidersModule,
    PaginacaoComponent,
    BtnVoltarDirective,
    BtnAtualizarDirective,
    BtnDeletarDirective,
    BtnVisualizarDirective
  ],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent extends PagesListAbstractComponent<Usuario> {
  private usuarioController: ListarUsuariosControllerInterface = inject(LISTAR_USUARIOS_CONTROLLER);

  protected override rotaBase = 'usuarios';
  _listaTipoUsuario: Array<DropdownType> = TIPOS_USUARIOS;
  _listaStatus: Array<DropdownType> = TIPOS_STATUS_USUARIO;

  criarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [''],
      status: [''],
      tipoUsuario: [''],
    });
  }

  carregarDados(): void {
    this.usuarioController.listar().then((usuarios: Usuario[]) => {
      this.listaDados = usuarios;
      this.setFluxoPaginacao();
    }).catch(error => {
      this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
    });
  }

  aplicarFiltros(): void {
    const { nome, tipoUsuario, status } = this.formulario.value;
    let usuariosFiltrados = JSON.parse(JSON.stringify(this.listaDados));
    if (nome) {
      const nomeNormalizado = removeAcentos(nome.toLowerCase());
      usuariosFiltrados = usuariosFiltrados.filter((usuario: any) =>
        removeAcentos(usuario.nome.toLowerCase()).includes(nomeNormalizado)
      );
    }
    usuariosFiltrados = filtrarPorPropriedades(usuariosFiltrados, {
      tipoUsuario,
      status,
    });
    this.listaPaginada = usuariosFiltrados;
  }

  criarUsuario(): void {
    this.router.navigate([`/${this.rotaBase}/cadastrar`]);
  }
}
