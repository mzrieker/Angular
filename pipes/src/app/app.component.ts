import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  userDate: string;
  amount: number;
  height: number;
  miles: number;

  car = {
    make: 'Jeep',
    model: 'Wrangler',
    year: 2009
  };

  onMilesChange(value: string){
    this.miles = parseFloat(value);
  }

  onHeightChange(value: string){
    this.height = parseFloat(value);
  }
  
  onNameChange(value: string) {
    this.name = value;
  }

  onDateChange(value: string) {
    this.userDate = value;
  }
  
  onAmountChange(value: string) {
    this.amount = parseFloat(value);
  }
}
