import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-homefour-courses',
  templateUrl: './homefour-courses.component.html',
  styleUrls: ['./homefour-courses.component.scss']
})
export class HomefourCoursesComponent implements OnInit {
  courseName:any;
  courseDetails=[{name:"Angular",imageUrl:'assets/img/courses/courses1.jpg',courseDesc:'MeanStack'}
  ,{name:"React",imageUrl:'assets/img/courses/courses2.jpg',courseDesc:'MernStack'},
  {name:"Python",imageUrl:'assets/img/courses/courses3.jpg',courseDesc:'Python Django/Flask'},
  {name:"Selenium",imageUrl:'assets/img/courses/courses4.jpg',courseDesc:'Automation'},
  {name:"Node Js",imageUrl:'assets/img/courses/courses5.jpg',courseDesc:'MeanStack'}
 ]
  constructor(private route:Router) { }
  ngOnInit(): void {
  }
  couuseDetails(coursename) {
    alert(coursename)
  }
  nevigateToCourseDetails(i) {
    console.log("i",i)
    this.route.navigate(['/single-courses',i])
   
  }

}
