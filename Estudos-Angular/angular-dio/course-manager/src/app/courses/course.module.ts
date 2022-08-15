import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarsModule } from "../shared/component/stars/stars.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { ReplacePipe } from "../shared/pipe/replace.pipe";
import { CourseInfo } from "./course-info/course-info.component";
import { CourseListComponent } from "./course-list.component";

@NgModule({
    //informas os pipes componentes desse module
    declarations: [
        CourseListComponent,
        CourseInfo,
    ],
    //modulos que são necessário para esse module possa existir
    imports: [
        //common para recursos basicos do angular como os pipes nativos, quando utilizado no module global já temos pelo BrowserModule
        CommonModule,
        FormsModule,
        StarsModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CourseListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfo
            },
        ])
    ]
})

export class CourseModule { }