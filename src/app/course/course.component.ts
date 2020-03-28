import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { EmailService } from '../email.service';



@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  private _title: String = "liste des coures !"
  private _courses: String[];
  public isActive: boolean = false;
  public isFavorite: boolean = false;
  
  public email: String = "zak@gmail.com";
  public course = {
    title: "Formation Angular Pro",
    price: 4.256,
    avis: 4,
    author: "zakaria aouzal",
    createdDate: new Date()
  };


  constructor(courseService: CourseService) {
    this.courses = courseService.getAllCourses();
  }



  get title() {
    return this._title;
  }

  get courses() {
    return this._courses
  }

  set courses(value) {
    this._courses = value;
  }

  onClick($event) {
    this.isActive = !this.isActive;
  }

  onFav() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit(): void {
  }

}
