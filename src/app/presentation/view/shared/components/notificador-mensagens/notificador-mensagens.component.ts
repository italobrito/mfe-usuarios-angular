import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { TempoEspera } from '@entities/tempo-espera';

@Component({
    selector: 'app-notificador-mensagens',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './notificador-mensagens.component.html',
})
export class NotificadorMensagensComponent {
    mensagens: Array<{ titulo: string; corpo: string; tipo: 'sucesso' | 'erro' | 'atenção' | 'sucesso' }> = [];

    adicionarMensagem(titulo: string, corpo: string, tipo: 'sucesso' | 'erro' | 'atenção' = 'sucesso'): void {
        this.mensagens.push({ titulo, corpo, tipo });
        setTimeout(() => this.removerMensagem(), TempoEspera.TEMPO);
    }

    removerMensagem(): void {
        this.mensagens.shift();
    }
}