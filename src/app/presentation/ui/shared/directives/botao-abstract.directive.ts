import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    standalone: true
})
export abstract class BotaoAbstractDirective {
    constructor(protected el: ElementRef, protected renderer: Renderer2) {
        this.aplicarEstilo();
        this.aplicarTexto();
    }

    protected abstract getClasses(): string[];
    protected abstract getTexto(): string;

    private aplicarEstilo(): void {
        const classes = this.getClasses();
        classes.forEach((className) => {
            this.renderer.addClass(this.el.nativeElement, className);
        });
    }

    private aplicarTexto(): void {
        const text = this.getTexto();
        this.renderer.setProperty(this.el.nativeElement, 'innerText', text);
    }
}