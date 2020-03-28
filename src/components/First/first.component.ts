import { Component } from '@angular/core';
import { EmailService } from '../../app/email.service';
import { CourseService } from '../../app/course/course.service';

@Component({
    selector: 'first',
    templateUrl: './first.component.html'
})
export class FirstComponent {

    firstTable: String[];

    constructor(emailService: EmailService, courseComponent: CourseService) {
        this.firstTable = courseComponent.getAllCourses();
        console.log(this.firstTable);
    }

}