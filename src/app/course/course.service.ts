import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class CourseService{
    getAllCourses=():String[]=>{
        return ["Angular","react","Vu.js"];
    }
}