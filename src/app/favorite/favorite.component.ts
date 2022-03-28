import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})


export class FavoriteComponent implements OnInit {
  
 @Input('IsActive') IsActive:boolean = true;
 @Output('change') change = new EventEmitter();
  constructor() {
   }

  ngOnInit(): void {
  }
    
  OnClick()
  {
    
    this.IsActive = !this.IsActive;
    var favObject:FavouriteObject =
    {
      IsActive : this.IsActive
    };
    this.change.emit(favObject);
  }
}

export interface FavouriteObject
{
  IsActive:boolean
}
