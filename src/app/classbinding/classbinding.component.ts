import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  myclass:String='success';
  myclass1:String='danger';
  rating:number=2;
  iserror:boolean=true;
  isSpecial:boolean=true;
  obj={
    //"success":this.iserror,
    "danger":this.iserror,
    "special":this.isSpecial
  };
  constructor() { }

  ngOnInit() {
  }

}
