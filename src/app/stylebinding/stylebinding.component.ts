import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {
  mycolor:String='red'; 
  mycolor1:String='green';
  rating:number=4; 
  constructor() { }

  ngOnInit() {
  }

}
