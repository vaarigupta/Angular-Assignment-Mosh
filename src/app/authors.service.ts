import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  GetAuthors()
  {
    return ['Vaari', 'Raavi', 'Rajat'];
  }

  constructor() { }
}
