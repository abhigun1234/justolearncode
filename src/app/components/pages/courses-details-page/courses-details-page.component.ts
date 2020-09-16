import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-courses-details-page',
  templateUrl: './courses-details-page.component.html',
  styleUrls: ['./courses-details-page.component.scss']
})
export class CoursesDetailsPageComponent implements OnInit {
  courseName
  constructor(public route :ActivatedRoute) { 
  
  }

  ngOnInit(): void {
    this.courseName=this.route.snapshot.params['']
  }

}
