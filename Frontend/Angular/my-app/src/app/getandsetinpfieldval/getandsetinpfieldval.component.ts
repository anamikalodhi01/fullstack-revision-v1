import { Component } from '@angular/core';

@Component({
  selector: 'app-getandsetinpfieldval',
  imports: [],
  templateUrl: './getandsetinpfieldval.component.html',
  styleUrl: './getandsetinpfieldval.component.css'
})
export class GetandsetinpfieldvalComponent {
  name = ""
  displayName = ""
  email = ""
  getName(event: Event){
    this.name = (event.target as HTMLInputElement).value;
    
  }

  showName(){
    this.displayName = this.name;
  }

  setName(){
    this.name = "Sam";
  }

  // with help of template reference variable
  getEmail(val:string){
    console.log(val);
    this.email = val;
  }

  setEmail(){
    this.email = "abc@getEmail.com";
  }
}
