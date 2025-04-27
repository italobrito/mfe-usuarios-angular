import { Directive } from '@angular/core';
import { BotaoAbstractDirective } from './botao-abstract.directive';

@Directive({
    selector: '[btn-atualizar]',
    standalone: true,
})
export class BtnAtualizarDirective extends BotaoAbstractDirective {
    protected getClasses(): string[] {
        return ['btn', 'btn-warning'];
    }

    protected getTexto(): string {
        return 'Atualizar';
    }
}