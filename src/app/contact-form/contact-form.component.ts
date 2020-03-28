import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  methodes:any[]=[{id:1,name:"email"},{id:2,name:"phone"},{id:3,name:"sms"}];
  constructor() { }

  ngOnInit(): void {
  }

  log(firstname) {
    console.log(firstname);
  }
  submit(form){
    console.log(form.value);
  }

}
