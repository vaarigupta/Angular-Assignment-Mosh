import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Like Heart Assignment';

  LikeButton = 
  {
    isLiked: false,
    likesCount: 10,
    body: "..."
  }

}
