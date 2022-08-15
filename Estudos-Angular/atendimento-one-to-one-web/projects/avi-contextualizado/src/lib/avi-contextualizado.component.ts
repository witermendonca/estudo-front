import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface AviContextualizadoComponentProps {
  title: string,
  icon: string,
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
}

@Component({
  selector: 'ng-avi-contextualizado',
  templateUrl: './avi-contextualizado.component.html',
  styleUrls: ['./avi-contextualizado.component.scss']
})
export class AviContextualizadoComponent implements OnInit {

  @Input() props: AviContextualizadoComponentProps = {
    title: 'iniciar chat',
    icon: 'chat',
    position: 'bottom-right',    
  }

  @Output() onInitTalkEmitter = new EventEmitter()

  @Output() onInitChatEmitter = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log('onInit: ', this.props)
  }

  onInitTalk () {
    this.onInitTalkEmitter.emit('Clicou no conversar '+ new Date())
  }

  onInitChat () {
    this.onInitChatEmitter.emit('Clicou no iniciar chat '+ new Date())
  }

}
