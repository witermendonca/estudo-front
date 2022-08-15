import { NgModule } from '@angular/core';
import { StarsComponent } from './stars.component';


@NgModule({
    declarations: [
        StarsComponent
    ],
    exports: [
        //quando importarmos o module Stars vamos conseguir usar o StarsComponent 
        StarsComponent
    ]
})
export class StarsModule {

}