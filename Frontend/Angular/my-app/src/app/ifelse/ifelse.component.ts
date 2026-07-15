import { Component } from '@angular/core';

@Component({
  selector: 'app-ifelse',
  imports: [],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  display = true;
  x = 10;
  toggleDiv = true;

  hide(){
    this.display = false;
  }
  show(){
    this.display = true;
  }
  toggle(){
    this.display = !this.display;
  }
  toggleTwo(){
    this.toggleDiv = !this.toggleDiv;
  }
}
