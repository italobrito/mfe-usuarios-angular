import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { MaskDirective } from '@shared/directives/MaskDirective';

@Component({
  selector: 'app-btp-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaskDirective],
  templateUrl: './btp-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BtpInputComponent),
      multi: true,
    },
  ],
  styleUrls: ['./btp-input.component.scss'],
})
export class BtpInputComponent implements ControlValueAccessor, OnInit {
  @Input() label: string = '';
  @Input() control: FormControl | any = new FormControl();
  @Input() mask: '' | '000.000.000-00' = '';

  errorMessages = {
    required: 'Nome é obrigatório',
    minlength: 'Nome deve ter pelo menos 3 caracteres',
  } as any;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  ngOnInit() {
    console.log('control = ', this.control);
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.control.setValue(value);
    }
    console.log('control = ', this.control);
  }

  getErrorMessage(): string | null {
    for (const key in this.control.errors) {
      if (this.control.errors.hasOwnProperty(key)) {
        return this.errorMessages[key] || 'Campo inválido';
      }
    }
    return null;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.control.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.control.disable();
    } else {
      this.control.enable();
    }
  }

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
    this.onTouched();
    console.log('control = ', this.control);
  }
}
