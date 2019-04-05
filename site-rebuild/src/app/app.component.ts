import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Super Cool DIY';
  firstPin: Pin = new Pin("How to make a miniature fimo succulent");
  }
}
export class Pin {
  public done: boolean = false;
  constructor(public description: string) { }
}
