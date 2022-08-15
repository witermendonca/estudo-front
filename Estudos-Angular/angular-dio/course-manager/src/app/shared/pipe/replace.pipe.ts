import { Pipe, PipeTransform } from "@angular/core";

/*
Pipe para quando quisermos realizar alguma formatação personalizada alem das ja nativas do Angular
*/ 


@Pipe({
    name: 'replace'
})


export class ReplacePipe implements PipeTransform {

    //PipeTransform para metodo de tranformação
    //primeiro parametro é o valor da propriedade
    //segundo parametro é que vamos passar
    //terceiro é o valor que vamos querer substituir o value
    transform(value: any, char: string, valueToReplace: string) {

        return value.replace(char, valueToReplace);

    }

}