import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text/input-text.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputTextAreaComponent } from './input-text-area/input-text-area.component';
import { InputSelectComponent } from './input-select/input-select.component';

@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent, 
    InputDateComponent, 
    InputTextAreaComponent, 
    InputSelectComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CamposModule { }
