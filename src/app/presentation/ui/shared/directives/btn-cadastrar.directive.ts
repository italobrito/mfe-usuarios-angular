import { Directive } from '@angular/core';
import { BotaoAbstractDirective } from './botao-abstract.directive';

@Directive({
    selector: '[btn-cadastrar]',
    standalone: true,
})
export class BtnCadastrarDirective extends BotaoAbstractDirective {
    protected getClasses(): string[] {
        return ['btn', 'btn-primary'];
    }

    protected getTexto(): string {
        return 'Cadastrar';
    }
}