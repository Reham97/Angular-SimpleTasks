import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() message: EventEmitter<string> = new EventEmitter();
  
  constructor() { }
  
  myEmail = "";
  myPassword = "";

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.message.emit("your email is "+this.myEmail+" your password is  "+this.myPassword)
  }

}
