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
    ListarUsuariosProvidersModule
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
      console.log('Usuários listaDados:', this.listaDados);
      this.listaPaginada = JSON.parse(JSON.stringify(this.listaDados));
      this.atualizarPaginacao();
    }).catch(error => {
      this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
    });
  }

  aplicarFiltros(): void {
    const { nome, tipoUsuario, status } = this.formulario.value;

    console.log('Usuários listaPaginada:', this.listaPaginada);

    console.log('listaDados:', this.listaDados);

    if (!nome && !tipoUsuario && !status) {
      this.listaPaginada = JSON.parse(JSON.stringify(this.listaDados));
      return;
    }

    let usuarios = JSON.parse(JSON.stringify(this.listaDados));

    if (nome) {
      const nomeNormalizado = removeAcentos(nome.toLowerCase());
      usuarios = usuarios.filter((usuario: any) =>
        removeAcentos(usuario.nome.toLowerCase()).includes(nomeNormalizado)
      );
    }
    usuarios = filtrarPorPropriedades(usuarios, {
      tipoUsuario,
      status,
    });

    this.listaPaginada = usuarios;
    this.atualizarPaginacao();
  }

  criarUsuario(): void {
    this.router.navigate([`/${this.rotaBase}/cadastrar`]);
  }
}
