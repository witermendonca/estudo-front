import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Course } from "./course";

//Tornando a classe elegivel para injeção de dependencia
@Injectable({
    //Será carregado na root da aplicação/ quando for carregar o app module
    providedIn: 'root'
})
export class CourseService {
    
    private coursesUrl: string =  'http://localhost:3100/api/courses'

    constructor(private httpClient: HttpClient){}


    //recupera list de Courses getAll
    retrieveAll(): Observable<Course[]>{
        return this.httpClient.get<Course[]>(this.coursesUrl);
    }

    //recupera um elemento pelo id findById
    retrieveById(id: string):  Observable<Course> { 
        return this.httpClient.get<Course>(`${this.coursesUrl}/${id}`);
    } 
   //return COURSES.find((courseIterator: Course) => courseIterator.id === id);
 

   /* save(course: Course): void {
        if(course.id){
            const index = COURSES.findIndex((courseIterator: Course) => courseIterator.id === course.id);
            COURSES[index] = course;
        }
    }*/
    save(course: Course): Observable<Course> { 
        if(course.id) { 
            return this.httpClient.put<Course>(`${this.coursesUrl}/${course.id}`, course);
        } else { 
            return this.httpClient.post<Course>(`${this.coursesUrl}`, course);
        }
    }

    deleteById(id: string): Observable<any> {
        return this.httpClient.delete<Course>(`${this.coursesUrl}/${id}`)
    }

}


