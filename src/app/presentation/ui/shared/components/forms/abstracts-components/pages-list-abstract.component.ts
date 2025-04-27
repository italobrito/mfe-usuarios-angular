import { OnInit, inject, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PagesDefaultAbstractComponent } from './pages-default-abstract.component';

@Component({
    selector: 'listar-abstract-component',
    template: '',
})
export abstract class PagesListAbstractComponent<T> extends PagesDefaultAbstractComponent implements OnInit {

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
        this.carregarDados();
    }

    abstract criarFormulario(): void;

    abstract carregarDados(): void;

    abstract aplicarFiltros(): void;

    setFluxoPaginacao(): void {
        this.aplicarFiltros();
        this.realizaContagemPaginas();
        this.setPaginaAtual();
        this.setIntervaloValoresPaginados();
    }

    botaoAvancaOuRetornaPagina(pagina: number): void {
        this.aplicarFiltros();
        this.setPaginaAtual(pagina);
        this.setIntervaloValoresPaginados();
    }

    setIntervaloValoresPaginados(): void {
        const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
        const fim = inicio + this.itensPorPagina;
        this.listaPaginada = this.listaPaginada.slice(inicio, fim);
    }

    realizaContagemPaginas(): void {
        const totalPag = Math.ceil(this.listaPaginada.length / this.itensPorPagina)
        if (this.listaPaginada.length > this.itensPorPagina) {
            this.paginas = Array.from({ length: totalPag }, (_, i) => i + 1);
        } else {
            this.paginas = [1];
        }
        this.totalPaginas = totalPag;
    }

    setPaginaAtual(numeroPagina?: number): void {
        if (!numeroPagina) {
            this.paginaAtual = 1
            return;
        }
        this.paginaAtual = numeroPagina;
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