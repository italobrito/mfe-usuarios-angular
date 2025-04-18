import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MaskDirective } from '@shared/directives/MaskDirective';

import { BtnsAbstractComponent, getFormControlProvider } from '../abstract-components/btns-abstract';

@Component({
  selector: 'app-btp-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaskDirective],
  templateUrl: './btp-input.component.html',
  styleUrls: ['./btp-input.component.scss'],
  providers: [getFormControlProvider(BtpInputComponent)],
})
export class BtpInputComponent extends BtnsAbstractComponent {
  @Input() mask = '';
  @Input() maxLength: number | undefined; 
}
