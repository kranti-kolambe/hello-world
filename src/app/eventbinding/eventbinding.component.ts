import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onImgClick(){
    console.log("Click on img occur!!");
  }
  onClick(myevent){
    console.log("Click on button occur!!");
    console.log(myevent);
  }
  
  onChange(myInput){
    console.log("Change event occure");
    console.log("Data is "+myInput.value);
    myInput.value="";
  }
}
