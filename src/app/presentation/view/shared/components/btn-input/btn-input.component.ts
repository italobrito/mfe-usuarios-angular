import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MaskDirective } from '@shared/directives/MaskDirective';

import { BtnsAbstractComponent, getFormControlProvider } from '../abstract-components/btns-abstract';

@Component({
  selector: 'app-btn-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaskDirective],
  templateUrl: './btn-input.component.html',
  styleUrls: ['./btn-input.component.scss'],
  providers: [getFormControlProvider(BtnInputComponent)],
})
export class BtnInputComponent extends BtnsAbstractComponent {
  @Input() mask = '';
  @Input() maxLength: number | undefined; 
}
