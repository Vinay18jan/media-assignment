import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

class User {
  constructor() { }
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'
  ]
})
export class LoginComponent implements OnInit {
  title = 'Tic Tac Toe';
  user: User = new User();
  get isAuthenticated() {
    return this._loginService.isAuthenticated;
  }

  constructor(private _loginService: LoginService, private _router: Router) { }

  ngOnInit(): void {
    this._loginService.getJSON()
  }

  login() {
    let user = this._loginService.checkUserExists(this.user.email, this.user.password);
    if(user) this._router.navigate(['home']);
  }

  logout() {
    this._loginService.setStatus();
  }
}
