import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  isVisible : boolean = false;
  counters: number[] = [];
  counter = 1;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.isVisible = !this.isVisible;
    this.counters.push(this.counter);
    this.counter++;
  }

}
