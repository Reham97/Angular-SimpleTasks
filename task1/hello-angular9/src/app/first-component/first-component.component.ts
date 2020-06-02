import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  
  @Input() trackNum: number = 0;
  @Output() newNum: EventEmitter<number> = new EventEmitter();

  constructor() { }

  name = "";
  ngOnInit(): void {
  
  }
  btn()
  {
    this.newNum.emit(1)

  }



}
