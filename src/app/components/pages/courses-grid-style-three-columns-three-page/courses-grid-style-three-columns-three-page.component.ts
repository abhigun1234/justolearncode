import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-courses-grid-style-three-columns-three-page',
  templateUrl: './courses-grid-style-three-columns-three-page.component.html',
  styleUrls: ['./courses-grid-style-three-columns-three-page.component.scss']
})
export class CoursesGridStyleThreeColumnsThreePageComponent implements OnInit {
  courseName:any;
  courseDetails=[{name:"Angular",imageUrl:'assets/img/courses/courses1.jpg',courseDesc:'MeanStack'}
  ,{name:"React",imageUrl:'assets/img/courses/courses2.jpg',courseDesc:'MernStack'},
  {name:"Python",imageUrl:'assets/img/courses/courses3.jpg',courseDesc:'Python Django/Flask'},
  {name:"Selenium",imageUrl:'assets/img/courses/courses4.jpg',courseDesc:'Automation'},
  {name:"Node Js",imageUrl:'assets/img/courses/courses5.jpg',courseDesc:'MeanStack'},
  {name:"Oracle Plsql",imageUrl:'assets/img/courses/courses6.jpg',courseDesc:'Database'}]
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  nevigateToCourseDetails(i) {
    console.log("i",i)
    this.route.navigate(['/single-courses',i])
   
  }

}
