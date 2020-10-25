import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.scss']
})
export class Course1Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    // console.log('Back button pressed');
    this.router.navigateByUrl('/modern-teaching')
  }
}
