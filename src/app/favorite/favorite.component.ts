import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  
  IsActive:boolean = true;
  constructor() {
   }

  ngOnInit(): void {
  }
    
  OnClick()
  {
    this.IsActive = !this.IsActive;
    if(this.IsActive)
    {
       console.log("filled star");
    }
    else
    {
      console.log("Empty star");

    }
  }
}
