import { Component } from '@angular/core';
import { animal } from 'faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  randomText = animal.bird();
  userText = '';


  onInput(value: string) {
    this.userText = value;
  }

  compareLetter(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

}
