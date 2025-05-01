import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { BtnVoltarDirective, BuscarUsuarioPorIdProvidersModule, NotificadorMensagensComponent, PagesDefaultAbstractComponent } from 'shared-forms';
import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { BuscarUsuarioPorIdControllerInterface, BUSCAR_USUARIO_POR_ID_CONTROLLER } from 'shared-forms';
import { UsuarioFormulario } from 'shared-forms/lib/domain/entities/usuario';

@Component({
  selector: 'app-visualizar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent,
    BuscarUsuarioPorIdProvidersModule,
    BtnVoltarDirective
  ],
  templateUrl: './visualizar.component.html',
})
export class VisualizarComponent extends PagesDefaultAbstractComponent<InformacoesUsuarioComponent> {
  private usuarioController: BuscarUsuarioPorIdControllerInterface = inject(BUSCAR_USUARIO_POR_ID_CONTROLLER);
  private router: ActivatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    setTimeout(() => {
      this.carregarDados();
    }, 500)
  }

  carregarDados(): void {
    const id = this.router.snapshot.paramMap.get('id');
    if (id) {
      this.usuarioController.buscarPorId(+id).then((usuario: UsuarioFormulario) => {
        this.componente._formulario.patchValue(usuario);
      }).catch(error => {
        this.notificador.adicionarMensagem('Erro', `${error}`, 'erro');
      });
    }
  }
}
