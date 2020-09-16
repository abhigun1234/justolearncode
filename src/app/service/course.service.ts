import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  name:any
  constructor() { }
  setCourseName(name){
    this.name=name
  }
  getCourseName(){
    return this.name
  }
}
