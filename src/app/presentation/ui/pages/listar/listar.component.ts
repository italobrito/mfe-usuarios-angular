import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MapearValorLabelPipe } from '@shared/pipes/mapear-valor-label-pipe';
import { BtnAtualizarDirective, BtnDeletarDirective, BtnInputComponent, BtnVisualizarDirective, BtnVoltarDirective, BtpDropdownComponent, filtrarPorPropriedades, LISTAR_USUARIOS_CONTROLLER, ListarUsuariosControllerInterface, ListarUsuariosProvidersModule, NotificadorMensagensComponent, PagesListAbstractComponent, PaginacaoComponent, removeAcentos, TIPOS_STATUS_USUARIO, TIPOS_USUARIOS } from 'shared-forms';
import { Usuario } from 'shared-forms/lib/domain/entities/usuario';
import { DropdownType } from 'shared-forms/lib/domain/entities/dropdown-type';

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
