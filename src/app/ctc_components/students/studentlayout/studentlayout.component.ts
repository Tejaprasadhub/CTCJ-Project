import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studentlayout',
  templateUrl: './studentlayout.component.html',
  styleUrls: ['./studentlayout.component.scss']
})
export class StudentlayoutComponent implements OnInit {
  urlPath : string;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.urlPath='student-profile';
  }

  routing(studentInfoURL){
    this.urlPath = (studentInfoURL.split(':')[1]).slice(0,-1);
    console.log(this.urlPath)
    this.router.navigateByUrl(studentInfoURL).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }
}
