import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';


import { NotificadorMensagensComponent } from '@shared/components/notificador-mensagens/notificador-mensagens.component';
import { InformacoesUsuarioComponent } from '@shared/components/forms/informacoes-usuario/informacoes-usuario.component';

@Component({
  selector: 'pages-default-abstract-component',
  template: '',
  standalone: true,
  imports: [CommonModule],
})
export abstract class PagesDefaultAbstractComponent {
  @ViewChild(InformacoesUsuarioComponent) componente!: InformacoesUsuarioComponent;
  @ViewChild(NotificadorMensagensComponent) notificador!: NotificadorMensagensComponent;
  
  private location: Location = inject(Location);
  
  protected _isModalAberta: boolean = false;
  _habilitarBotaoPersistir: boolean = true;

  voltar(): void {
    this.location.back();
  }

  abrirFecharModal() {
    this._isModalAberta = !this._isModalAberta;
  }

  confirmouAcaoModal() {
    this.abrirFecharModal();
  }

  fecharModal() {
    this.abrirFecharModal();
  }
}
