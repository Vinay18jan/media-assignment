import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userDB;
  currentUser;
  isAuthenticated = false;

  constructor(private http: HttpClient) { }

  getJSON() {
    return this.http.get('db/users.json')
    .subscribe(data => this.userDB = data)
  }

  checkUserExists(e:string, p: string):boolean {
    for(let user of this.userDB) {
      let {userid: email, password:pwd} = user;
      if(e == email && p == pwd) {
        this.isAuthenticated = true;
        this.currentUser = user
        return user;
      } 
    }
    this.currentUser = null;
    this.isAuthenticated = false;
    return ;
  }

  setStatus() {
    this.isAuthenticated = false;
    this.currentUser = null;
  }
}
