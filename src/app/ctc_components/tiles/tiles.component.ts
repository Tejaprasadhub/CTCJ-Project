import { Component, OnInit } from '@angular/core';
import { Tiles } from 'src/app/models/tiles';
import { Router } from "@angular/router";


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.scss']
})
export class TilesComponent implements OnInit {
  MyTilesArray:Array<Tiles>;
  tilesUrl:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.MyTilesArray = [
      new Tiles(565, 'Students','blue'),
      new Tiles(56, 'Teachers','green'),
      new Tiles(40, 'Users','lightblue'),
      new Tiles(6, 'Exams','yellow'),
      new Tiles(10, 'Classes','pink'),
      new Tiles(24, 'Sections','blue')
    ];    
  }
  routing(sgsf){
    //alert(sgsf);
    //console.log("",this.MyTilesArray[sgsf].name);
    this.tilesUrl = this.MyTilesArray[sgsf].name;
    this.router.navigateByUrl(this.tilesUrl).then(e => {
      if (e) {
        console.log("Navigation is successful!");
      } else {
        console.log("Navigation has failed!");
      }
    });
  }



}
