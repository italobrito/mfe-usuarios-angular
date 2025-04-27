import { Directive } from '@angular/core';
import { BotaoAbstractDirective } from './botao-abstract.directive';

@Directive({
    selector: '[btn-deletar]',
    standalone: true,
})
export class BtnDeletarDirective extends BotaoAbstractDirective {
    protected getClasses(): string[] {
        return ['btn', 'btn-danger'];
    }

    protected getTexto(): string {
        return 'Deletar';
    }
}