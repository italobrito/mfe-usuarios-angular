import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownType } from '@entities/dropdown-type';
import { TIPOS_USUARIOS } from '@shared/constants/tipos-usuarios';

import { PagesListAbstractComponent } from '@shared/components/forms/abstracts-components/pages-list-abstract.component';
import { BtpDropdownComponent } from '@shared/components/inputs/btn-dropdown/btp-dropdown.component';
import { BtnInputComponent } from '@shared/components/inputs/btn-input/btn-input.component';

import { TIPOS_STATUS_USUARIO } from '@shared/constants/tipos-status-usuario';

import { MapValueToLabelPipe } from '@shared/pipes/map-value-label-pipe';

import { Usuario } from '@entities/usuario';

import { filtrarPorPropriedades } from '@shared/utils/filtro-generico';
import { removeAcentos } from '@shared/utils/remove-acentos';

import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';
import { ListarUsuariosProvidersModule } from '@shared/providers/listar-usuarios-providers.module';
import { LISTAR_USUARIOS_CONTROLLER, ListarUsuariosControllerInterface } from '@domain/interfaces/controllers/listar-usuario-controller.interface';
import { PaginacaoComponent } from '@shared/components/paginacao/paginacao.component';

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
    MapValueToLabelPipe,
    NotificadorMensagensComponent,
    ListarUsuariosProvidersModule,
    PaginacaoComponent
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
