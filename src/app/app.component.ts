import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'salam-angular';
  post = {
    isFavorite: true,
    author: null
  }

  courses;

  selectedCour = "Laravel"

  onChangefaverite(args) {
    console.log("isFaverite changed", args)
  }

  init() {
    this.courses = ["Angular", "React js", "Laravel"];
  }
  DeleteCours(cour) {
    let index = this.courses.indexOf(cour);
    this.courses.splice(index, 1);
  }
  EditCours(cour) {
    let index = this.courses.indexOf(cour);
    this.courses[index] = "updated";

  }
}
