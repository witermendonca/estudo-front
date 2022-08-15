import { Component } from '@angular/core';
import { AviContextualizadoComponentProps } from 'projects/avi-contextualizado/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'atendimento-one-to-one';

  props: AviContextualizadoComponentProps = {
    title: 'iniciar chat',
    icon: 'chat',
    position: 'bottom-right',
  }

  conversar(event: any) {
    console.log(event)
  }

  chat(event: any) {
    console.log(event)
  }

}
