import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AprendizadoComponent } from './aprendizados/aprendizado.component';
import { CourseListComponent } from './courses/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AprendizadoComponent,
    CourseListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
