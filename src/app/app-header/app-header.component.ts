import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss'
})
export class AppHeaderComponent {

    constructor( private router:Router){}

    changeRoute(evt: MouseEvent, name: string) {
      evt.preventDefault();
  
      let navcfg = [{ outlets: { secondary: name } }];
  
      this.router.navigate(navcfg, {
        skipLocationChange: false,
      });
    }
}
