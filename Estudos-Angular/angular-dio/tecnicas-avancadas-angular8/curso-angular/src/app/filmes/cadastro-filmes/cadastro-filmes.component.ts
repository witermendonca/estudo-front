import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidarCamposService } from 'src/app/shared/components/validar-campos.service';

@Component({
  selector: 'dio-cadastro-filmes',
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.scss']
})
export class CadastroFilmesComponent implements OnInit {

  //form group por termos varios inputs
  cadastro: FormGroup;

  //form builder vai criar um formulario para que o angular manipuli-o
  //form builder retorna pelo metodo group um form group
  // validarCamposService tem que ser public porque se não conseguimos acessar no html vamos precisar manipular no html
  constructor(private formBuilder: FormBuilder, public validarCamposService: ValidarCamposService) { }

  //retorna todos os inputs, 
  get f(){
    return this.cadastro.controls;
  }

  ngOnInit() {

    this.cadastro = this.formBuilder.group({
      //controls inputs do form(nome, valor e quais as validações)
      //valor inicial, validações que queremos
      titulo: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(256)]],
      urlFoto: ['', [Validators.minLength(10)]],
      dtLancamento: ['', [Validators.required]],
      descricao: [''],
      nota: [0, [Validators.required, Validators.min(0), Validators.max(10)]],
      urlIMDb: ['', [Validators.minLength(10)]],
      genero: ['', [Validators.required]]
    });

  }

  salvar(): void {
    if(this.cadastro.invalid){
      console.log('Castro invalido')
      return;
    }else{
      alert('Sucess\n\n'+ JSON.stringify(this.cadastro.value, null, 4) )
    }
  }

  reiniciarForm(): void {
    this.cadastro.reset();
  }

}
