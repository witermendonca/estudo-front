import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from "../course";
import { CourseService } from "../course.service";

@Component({
    templateUrl: './course-info.component.html'
})

export class CourseInfo implements OnInit {

    course!: Course;

    //ActivatedRoute pega as informações da rota no exato momento no caso o id
    constructor(private _activatedRoute: ActivatedRoute, private courseService: CourseService) { }

    ngOnInit(): void {

        //atribui course retornado pelo courseService pelo id capturado pelo ActivatedRoute ao course
        // this.course = this.courseService.retrieveById(this._activatedRoute.snapshot.paramMap.get('id')!);

        this.courseService.retrieveById(this._activatedRoute.snapshot.paramMap.get('id')!).subscribe({
            next: course => this.course = course,
            error: err => console.log('Error', err)
        });
    }

    save(): void {
        //this.courseService.save(this.course!);
        this.courseService.save(this.course!).subscribe({
            next: course => console.log('Saved with success', course),
            error: err => console.log('Error', err)
        });
    }


}