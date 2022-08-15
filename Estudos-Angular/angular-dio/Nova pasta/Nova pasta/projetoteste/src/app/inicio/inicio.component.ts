import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Card } from '../model/card';
import { CardText } from '../model/card-text';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  select!: FormGroup;

  valeuSelect: string = 'text';
  
  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    const cardText: Card = {
      id: '537fb21b-3da3-4295-b99d-92d6227b2188',
      segment: 'wmocasldu',
      title: 'simular ou contratar crédito consignado e demais empréstimos',
      type: 'TEXT',
      createAt: '15/10/2021',
      updateAt: '15/10/2021',
      content: 'Oi, pode falar comigo que te ajudo a tirar suas dúvidas sobre Crédito Consignado.',
    };

    const cardUrl: Card= {
      id: '537fb21b-3da3-4295-b99d-92d6227b2188',
      segment: 'wmocasldu',
      title: 'simular ou contratar crédito consignado e demais empréstimos',
      type: 'URL',
      createAt: '15/10/2021',
      updateAt: '15/10/2021',
      url: 'http://localhost'
    }
    console.log(cardText)
    console.log(cardUrl)
    
    this.select = this.formBuilder.group({
      cardType : ['text']
    });

   this.select.get('cardType')?.valueChanges.subscribe(x =>{
     this.valeuSelect = x
    })
  }


  
  

}
