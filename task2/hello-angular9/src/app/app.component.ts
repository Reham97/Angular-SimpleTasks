import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reham';
  myImage = '../assets/stayHome.jpeg';
  trakNums = 0;
  name = "";
  trackNum = 2;
  message = "";
  clickMe()
  {
    this.trakNums = this.trakNums+1;
    console.log("Hello");
  }
  getNum(newNum)
  {
    this.trackNum = this.trackNum + newNum;
  }
  getData(message)
  {
    this.message = message;

  }
}
