import { Directive } from '@angular/core';

import { BotaoAbstractDirective } from './botao-abstract.directive';

@Directive({
    selector: '[btn-voltar]',
    standalone: true,
})
export class BtnVoltarDirective extends BotaoAbstractDirective {
    protected getClasses(): string[] {
        return ['btn', 'btn-secondary', 'me-2'];
    }

    protected getTexto(): string {
        return 'Voltar';
    }
}