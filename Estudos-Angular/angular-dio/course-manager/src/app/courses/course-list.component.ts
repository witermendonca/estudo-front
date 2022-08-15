import { Component } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
})
export class CourseListComponent {

    _courses: Course[] = [];

    _filterBy!: string;

    filteredCourses: Course[] = [];

    constructor(private _courseService: CourseService) { }

    //No momento da inicialização do component
    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        //this._courses = this._courseService.retrieveAll();
        //this.filteredCourses = this._courses;
        this._courseService.retrieveAll().subscribe({
            next: courses => {
                this._courses = courses;
                this.filteredCourses = this._courses;
            },
            error: err => console.log('Error', err)
        })
    }

    deleteById(courseId: string): void {
        this._courseService.deleteById(courseId).subscribe({
        next: () => {
            console.log('Deleted with success');
            this.retrieveAll(); //atualiza a lista de courses depois de deletar
        },
        error: err => console.log('Error', err)
    })

    }

    //Event Data Bindings
    set filter(value: string) {
        this._filterBy = value;

        //filtrando o courses 
        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter() {
        return this._filterBy;
    }
}