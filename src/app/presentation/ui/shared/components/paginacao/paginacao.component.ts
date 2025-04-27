import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paginacao',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginacao.component.html',
})
export class PaginacaoComponent {
  @Input() totalPaginas!: number;
  @Input() paginaAtual!: number;
  @Input() paginas: number[] = [];
  @Output() mudarPagina = new EventEmitter<number>();

  botaoAvancaOuRetornaPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.mudarPagina.emit(pagina);
    }
  }
}