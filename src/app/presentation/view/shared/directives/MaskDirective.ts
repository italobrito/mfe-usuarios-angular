import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[mask]',
  standalone: true,
})
export class MaskDirective {
  @Input() mask: string = '';

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const rawValue = input.value.replace(/\D/g, '');
    if (!this.mask) {
      input.value = rawValue;
      return;
    }

    const maskedValue = this.applyMask(rawValue);
    input.value = maskedValue;
  }

  private applyMask(value: string): string {
    let maskedValue = '';
    let maskIndex = 0;
    let valueIndex = 0;

    while (maskIndex < this.mask.length && valueIndex < value.length) {
      if (this.mask[maskIndex] === '0') {
        maskedValue += value[valueIndex];
        valueIndex++;
      } else {
        maskedValue += this.mask[maskIndex];
      }
      maskIndex++;
    }

    return maskedValue;
  }
}
