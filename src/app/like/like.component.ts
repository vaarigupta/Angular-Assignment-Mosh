import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isLiked')  isLiked:boolean = false;
  @Input('likesCount')  likesCount:number = 0;

  OnClick()
  {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked? 1:-1;
  }


}
