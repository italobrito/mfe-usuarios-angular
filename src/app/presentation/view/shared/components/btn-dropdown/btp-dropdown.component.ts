import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { BtnsAbstractComponent, getFormControlProvider } from '../abstract-components/btns-abstract';

@Component({
  selector: 'app-btp-dropdown',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './btp-dropdown.component.html',
  styleUrls: ['./btp-dropdown.component.scss'],
  providers: [getFormControlProvider(BtpDropdownComponent)],
})
export class BtpDropdownComponent extends BtnsAbstractComponent {
  @Input() options: { value: string; label: string }[] = [];
}