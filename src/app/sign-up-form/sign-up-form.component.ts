import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../node_modules/@angular/forms';
import { UsernameValidator } from './usernamValidator';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }

  form = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(3),UsernameValidator.canNotContainSpaces]),
    password: new FormControl('', Validators.required),
  });

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }


}
