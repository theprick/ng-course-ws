import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

  public getAuthors() {
    return ["author1", "author2", "author3"];
  }
}
