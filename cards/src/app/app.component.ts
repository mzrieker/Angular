import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { title: 'Neat Tree',
      imageURL: 'assets/tree.jpeg' ,
      username: 'treeAdmirer', 
      content:  'I saw this neat tree today!'
    },
    { title: 'Snowy Mountain',
      imageURL: 'assets/mountain.jpeg' ,
      username: 'mountainLover', 
      content:  'Amazing shot of the mountain near me.'
    },
    { title: 'Mountain Biking',
      imageURL: 'assets/biking.jpeg' ,
      username: 'bikingFanatic', 
      content:  'Great time on the trails today!'
    },
    { title: 'Tropical Snorkeling',
      imageURL: 'assets/ocean.jpg' ,
      username: 'oceanAficionado', 
      content:  'Had the best time in paradise.'
    }
  ]
}
