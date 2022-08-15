import { Component, OnInit } from "@angular/core";
import { Course } from "./course";


@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {


    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: '1',
                name: 'Angular',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                date: 'dec 10'
            },
            {
                id: '2',
                name: 'Angular',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                date: 'dec 10'
            },
            {
                id: '3',
                name: 'Angular',
                imageUrl: '',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                date: 'dec 10'
            }
        ];
    }
}