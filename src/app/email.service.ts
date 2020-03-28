import { Injectable } from '@angular/core';


export class EmailService {


  getAllCourses=():String[]=>{
    return ["Angular","react","Vu.js"];
}
  constructor() { }
}
