import { Component } from '@angular/core';
import { animal } from 'faker'
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  randomText = animal.bird();
  userText = '';
  url: string = "https://en.m.wikipedia.org/wiki/" + this.randomText;
  urlSafe: SafeResourceUrl;

  onInput(value: string) {
    this.userText = value;
  }

  compareLetter(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
