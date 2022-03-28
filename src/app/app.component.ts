import { Component } from '@angular/core';
import { FavouriteObject } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Assignments';
  favobject=
  {
    "IsActive":true,
    "title" : "Vaari"
  }

  OnFavChanged(favObj: FavouriteObject )
  {
    console.log("Fav changed : ",  favObj);
  }

}
