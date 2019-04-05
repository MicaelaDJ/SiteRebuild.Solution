import { Component } from '@angular/core';
import { Pin } from './models/pin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = 'Super Cool DIYs';
  pins: Pin[] = [
    new Pin("How to make a miniature fimo succulent"),
    new Pin("Folding an origami crane"),
    new Pin("Recipe for the most amazing potato salad")
  ];
  editPin() {
    alert("Edit a Pin")
  }
}
