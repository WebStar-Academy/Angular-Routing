import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
varName : string = "";
height: number = 100;
width :number = 100;
  constructor() { }

  ngOnInit() {
  }
  
  conClick() {
    // Operation
    this.height = this.height+50;
    this.width = this.width+50;
  }

  onValueChange(event:any){
    console.log(event.target.value);
    this.varName = event.target.value;
  }
  
}
