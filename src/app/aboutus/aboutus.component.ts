import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  template: `
    <p>
    ToyFight is an award-winning creative design agency.

    You’ll find the About Page at the top of the menu under the Who section.
    
    This page has a unique feel, thanks to the deconstructed action figures representing the founders, Leigh Whipday and Jonny Lander.
    
    The great attention to detail and interactivity also reflect the company’s 16 years of experience.
    
    To sum up, this page stands out by providing the perfect mix of fun and information.
    </p>
  `,
  styles: [
  ]
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
