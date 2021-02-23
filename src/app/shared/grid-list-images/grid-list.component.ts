import { Component, Input, OnInit } from '@angular/core';

interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  imageURL?: string;
}

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styles: [
  ]
})
export class GridListComponent implements OnInit {
  @Input() col : number
  @Input() rowHeight: number
  
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 2, color: 'lightblue', imageURL: this.getRandomImageURL(300,400)},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen', imageURL: this.getRandomImageURL(400,400)},
    {text: 'Three', cols: 2, rows: 2, color: 'lightpink', imageURL: this.getRandomImageURL(500,400)},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', imageURL: this.getRandomImageURL(600,400)},
    {text: 'One', cols: 3, rows: 5, color: 'lightblue', imageURL: this.getRandomImageURL(300,400)},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen', imageURL: this.getRandomImageURL(400,400)},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', imageURL: this.getRandomImageURL(500,400)},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1', imageURL: this.getRandomImageURL(600,400)}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  getRandomImageURL(width: number, height: number): string {
    return `https://picsum.photos/${width}/${height}/?random`
  }

}
