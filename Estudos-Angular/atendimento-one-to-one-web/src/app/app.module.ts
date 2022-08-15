import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AviContextualizadoModule } from 'projects/avi-contextualizado/src/public-api';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AviContextualizadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
