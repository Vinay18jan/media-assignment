import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

class MenuItem {
  constructor(public caption: string, public path: string, public link: string) { }
}

@Component({
  selector: 'app-nav',
  template: `
  <nav mat-tab-nav-bar>
    <a class="title-icon" href="http://angular.io" target="_blank"><i></i></a>
      <a mat-tab-link *ngFor="let link of menuItem" [routerLink]="link.path" routerLinkActive #rla="routerLinkActive"
        [active]="rla.isActive">
        {{link.caption}} 
      </a>
      <p class="align" *ngIf="this.currentUser?.userid">EMAIL: {{this.currentUser?.userid}}</p>
  </nav>
  `,

  styles: [
    `
    .title-icon > i{
      background-image: url('/assets/ng.png');
      background-repeat: no-repeat;
      background-position: bottom;
      padding: 1em 2em;
    }
    .nav-button-right {
      position: fixed;
      right: 2em;
    }
    .align {
      text-align: right;
      margin-left: 40rem;
      margin-top: 1rem;
    }
   `
  ]
})
export class NavComponent implements OnInit {
  menuItem: MenuItem[]
  get currentUser() {
    return this._loginService.currentUser
  }
  get isAuthenticated() {
    return this._loginService.isAuthenticated;
  }
  constructor(private _loginService: LoginService) { }

  ngOnInit(): void {
    this.menuItem = this.isAuthenticated ? [
      { caption: 'Home', path: 'home', link: '/home' },
      { caption: 'Gallery', path: 'gallery', link: '/gallery' },
      { caption: 'Login', path: 'login', link: '/login' },
      { caption: 'About us', path: 'aboutus', link: '/aboutus' },
    ] : 
    [
      { caption: 'Home', path: 'home', link: '/home' },
      { caption: 'Login', path: 'login', link: '/login' },
      { caption: 'About us', path: 'aboutus', link: '/aboutus' },
    ]
  }

}
