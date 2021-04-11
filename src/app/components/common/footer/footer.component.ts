import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/service/course.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private courseService:CourseService) { }

  ngOnInit(): void {
  }
  // public postdata(data :any)
  // // {  alert("hi")
  // //    this.restro.postResaturentMenu(data).subscribe(res=>{

  // //     console.log(res)
  // //     this.data=res
  // //    },error=>{

  // //     alert(error)
  // //     console.log(error)
  // //    })

  // }
}
