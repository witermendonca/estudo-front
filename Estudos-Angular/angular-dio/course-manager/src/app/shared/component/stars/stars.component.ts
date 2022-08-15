import { Input } from '@angular/core';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})

//OnInit ele inicia de forma sincrona OnChanges de forma assincrona / pode ser que no momento da inicialização não esteja disponivel
export class StarsComponent implements OnChanges {

  constructor() { }

  //@Input() esteja elegivel para receber informação de componentes externos
  //adiciona atributo a tag <app-stars></app-stars>
  @Input()
    rating: number = 0;

    starWidth!: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5; //para funcionar o rating ou 94 ou 74
    }

}
