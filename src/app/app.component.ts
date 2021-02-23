import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _router: Router , private _activatedRoute: ActivatedRoute,  private _titleService: Title) {
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(() => {
        let child = this._activatedRoute.firstChild
        while(child) {
          if(child.firstChild) child = child.firstChild
          else if(child.snapshot.data?.title) return child.snapshot.data.title
          else return null
        }
      })
    ).subscribe( (data: any) => {
      if (data) {
          this._titleService.setTitle(data);
      }
  });
  }
}
