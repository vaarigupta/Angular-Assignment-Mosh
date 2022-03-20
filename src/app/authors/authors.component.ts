import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:any;
  constructor(service: AuthorsService) {
       this.authors = service.GetAuthors();

   }

  ngOnInit(): void {
  }

}
