import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  // handleEvent(event: MouseEvent){
  //   console.log("Event handled", event.type);
  //   console.log("Event target", (event.target as Element).className);
  // }

   handleEvent(event: Event){
    console.log("Event handled", event.type);
    console.log("value", (event.target as HTMLInputElement).value);

  }


}
