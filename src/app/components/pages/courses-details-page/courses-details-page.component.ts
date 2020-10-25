import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {Router} from '@angular/router'
import { Course1Component } from 'src/app/coursecontent/course1/course1.component';
@Component({
  selector: 'app-courses-details-page',
  templateUrl: './courses-details-page.component.html',
  styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit {
  courseName
  angularCourse:boolean=false
  reactCourse:boolean=false;
  constructor(public route :ActivatedRoute,private routing:Router) { 
  
  }

  ngOnInit(): void {
    let id=this.courseName=this.route.snapshot.paramMap.get('id')
    //alert(id)
    if(id==='0'){
     
      //  this.angularCourse=true;
      //  this.reactCourse=false;
      this.routing.navigateByUrl("/course1")
      }
      else if(id==='1'){
        this.routing.navigateByUrl("/course2")
      }
      else if(id==='2'){
        this.routing.navigateByUrl("/course5")
      }
      else if(id=='4'){
        this.routing.navigateByUrl("/course4")
      }
      else if(id=='3'){
        this.routing.navigateByUrl("/course3")
      }
      else if(id=='5'){
        this.routing.navigateByUrl("/course6")
      }
      console.log("this.angularCourse",this.angularCourse)
  }

}
