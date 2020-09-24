import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Follower } from '../model/follower';

@Injectable({providedIn: 'root'})
export class FollowersService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Follower[]> {
    let url = 'https://api.github.com/users/chybie/followers';
    let httpHeaders = new HttpHeaders({
      Authorization: btoa('theprick:Pmmcpad123')
    });
    return this.http.get<Follower[]>(url, { headers: httpHeaders });
  }
}
