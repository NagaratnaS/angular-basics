import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {

  userName : string = 'Nagaratna';
  isUserNameNull = false;
  constructor() { }


  checkUserName(event: any) {
    if (event.target.value == "") {
      this.isUserNameNull = true;
    } else {
      this.isUserNameNull = false;
    }
  }

  makeUserNameNull(){
    this.userName = "";
    this.isUserNameNull = true;
  }
  ngOnInit(): void {
  }

}
