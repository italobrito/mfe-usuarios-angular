import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DropdownType } from '@entities/dropdown-type';
import { TIPOS_USUARIOS } from 'src/app/presentation/ui/shared/constants/tipos-usuarios';
import { ListarAbstractComponent } from './listar-abstract.component';
import { BtpDropdownComponent } from 'src/app/presentation/ui/shared/components/inputs/btn-dropdown/btp-dropdown.component';
import { BtnInputComponent } from 'src/app/presentation/ui/shared/components/inputs/btn-input/btn-input.component';
import { TIPOS_STATUS_USUARIO } from 'src/app/presentation/ui/shared/constants/tipos-status-usuario';
import { MapValueToLabelPipe } from 'src/app/presentation/ui/shared/pipes/map-value-label-pipe';

import { Usuario } from '@entities/usuario';
import { filtrarPorPropriedades } from 'src/app/presentation/ui/shared/utils/filtro-generico';
import { removeAcentos } from 'src/app/presentation/ui/shared/utils/remove-acentos';

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
    MapValueToLabelPipe
  ],
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent extends ListarAbstractComponent<Usuario> {

  protected override rotaBase = 'usuarios';
  _listaTipoUsuario: Array<DropdownType> = TIPOS_USUARIOS;
  _listaStatus: Array<DropdownType> = TIPOS_STATUS_USUARIO;

  override listaDados = [{ nome: 'João Silva', email: 'joao@email.com', tipoUsuario: 'A', status: 'A', id: 1 },
  { nome: 'Maria Oliveira', email: 'maria@email.com', tipoUsuario: 'C', status: 'I', id: 2 },
  { nome: 'Carlos Souza', email: 'carlos@email.com', tipoUsuario: 'A', status: 'A', id: 3 },
  { nome: 'Ana Costa', email: 'ana@email.com', tipoUsuario: 'C', status: 'A', id: 4 },
  { nome: 'Pedro Lima', email: 'pedro@email.com', tipoUsuario: 'C', status: 'I', id: 5 },] as Array<Usuario>;

  criarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [''],
      status: [''],
      tipoUsuario: [''],
    });
  }

  aplicarFiltros(): void {
    const { nome, tipoUsuario, status } = this.formulario.value;
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
    console.log('Usuários filtrados:', this.listaPaginada);
    // this.atualizarPaginacao();
  }
}
