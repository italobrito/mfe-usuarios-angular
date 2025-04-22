import { OnInit, inject, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'listar-abstract-component',
    template: '',
})
export abstract class ListarAbstractComponent<T> implements OnInit {

    protected router: Router = inject(Router);
    protected formBuilder: FormBuilder = inject(FormBuilder);
    protected abstract rotaBase: string;

    formulario!: FormGroup | any;

    listaDados: Array<T> = [];
    listaPaginada: Array<T> = [];

    paginaAtual: number = 1;
    itensPorPagina: number = 5;
    totalPaginas: number = 0;
    paginas: Array<number> = [];

    ngOnInit(): void {
        this.criarFormulario();
        this.carregarItens();
        this.atualizarPaginacao();
    }

    abstract criarFormulario(): void;

    atualizarPaginacao(): void {
        const totalItens = this.listaDados.length;
        this.totalPaginas = Math.ceil(totalItens / this.itensPorPagina);
        this.paginas = Array.from({ length: this.totalPaginas }, (_, i) => i + 1);
        this.alterarPagina(1);
    }

    carregarItens(): void {
        this.listaPaginada = JSON.parse(JSON.stringify(this.listaDados));
    }

    alterarPagina(pagina: number): void {
        if (pagina < 1 || pagina > this.totalPaginas) {
            return;
        }
        this.paginaAtual = pagina;
        const inicio = (pagina - 1) * this.itensPorPagina;
        const fim = inicio + this.itensPorPagina;
        this.listaPaginada = this.listaDados.slice(inicio, fim);
    }

    filtroSelect(listaDados: Array<T>, chave: string): Array<T> {
        return listaDados.filter(
            (dados: any) => dados['chave'] === chave
        );
    }

    editar(usuario: any): void {
        this.router.navigate([`/${this.rotaBase}/atualizar/${usuario.id}`]);
    }

    deletar(usuario: any): void {
        this.router.navigate([`/${this.rotaBase}/deletar/${usuario.id}`]);
    }

    visualizar(usuario: any): void {
        this.router.navigate([`/${this.rotaBase}/visualizar/${usuario.id}`]);
    }
}