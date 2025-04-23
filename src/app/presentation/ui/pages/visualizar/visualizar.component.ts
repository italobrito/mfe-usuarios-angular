import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';
import { PagesDefaultAbstractComponent } from '@shared/components/forms/abstracts-components/pages-default-abstract.component';
import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';

import { BuscarUsuarioPorIdProvidersModule } from '@shared/providers/buscar-usuario-por-id-providers.module';

import { BUSCAR_USUARIO_POR_ID_CONTROLLER, BuscarUsuarioPorIdControllerInterface } from '@domain/interfaces/controllers/buscar-usuario-por-id-controller.interface';

import { UsuarioFormulario } from '@entities/usuario';

@Component({
  selector: 'app-visualizar-usuario',
  standalone: true,
  imports: [
    CommonModule,
    InformacoesUsuarioComponent,
    NotificadorMensagensComponent,
    BuscarUsuarioPorIdProvidersModule
  ],
  templateUrl: './visualizar.component.html',
})
export class VisualizarComponent extends PagesDefaultAbstractComponent {
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
