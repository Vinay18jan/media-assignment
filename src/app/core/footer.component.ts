import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer id="footer">@Copyright - Media company</footer>
  `,
  styles: [
    `
    #footer {
      position: fixed;
      height: 30px;
      background-color: blue;
      bottom: 0px;
      left: 0px;
      right: 0px;
      margin-bottom: 0px;
      color: white;
      text-align: center;
  }
    `
  ],
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
