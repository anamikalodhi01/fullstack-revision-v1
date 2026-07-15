import { Component } from '@angular/core';
import { IfelseComponent } from './ifelse/ifelse.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { EventsComponent } from './events/events.component';
import { GetandsetinpfieldvalComponent } from './getandsetinpfieldval/getandsetinpfieldval.component';
import { StyleoptionComponent } from './styleoption/styleoption.component';


@Component({
  selector: 'app-root',
  imports: [ IfelseComponent],
  templateUrl: './app.component.html',
  styles : [`h1{ color: red; }`]
})
export class AppComponent {
  // title = 'my-app'; knwon as properties do not define using const or let class ke adr prop bhr variable 
  // can use variable inside class using func
  // title = 'Anamika Lodhi';
  // name = "Annu";
  // x = 10;
  // y = 10;
  // user1 = 'Annu';
  // user2 = 'Anamika';

  onClick(){
    console.log("Function called");
    this.otherFunction();
  }

  otherFunction(){
    console.log("Other function called");
  }

  // property, if not write string here no problem ts understand it
  name:string="Anamika Lodhi";
  data:string|number="Hello";
  other:any= true;       // when not knwo the datatype then take any

  updateName(){
    let x= 30;            // variable 
    let y:number= 30;            // variable
    this.name = "Annu";
    this.data = 100;
    this.other = 10;
  }

  sum(a: number, b: number){
    console.log(a+b);
  }

  count = 0;
  // handleIncrement(){
  //   this.count++;
  // }

  // handleDecrement(){
  //   this.count--;
  // }

  // handleReset(){
  //   this.count=0;
  // }

  handleCounter(val:string){
    if(val== 'minus'){
      this.count--;
    }else if(val== 'plus'){
      this.count++;
    }else
      this.count =0;
  }
}
