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
  public postResaturentMenu(data:any)
  {  
  //   const body = JSON.stringify(data);
  //   let options = {
  //     headers: this.headers
  //    }; 
  //    environment.apiUrl
  //  const url= environment.apiUrl+'/add_menu/'
  //  return this.httpclient.post(url,body,options)
   
  }
}
