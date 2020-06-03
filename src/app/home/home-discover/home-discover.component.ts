import { Component } from '@angular/core';

@Component({
  selector: 'app-home-discover',
  template: `
    <div>
      <a [routerLink]="[ 'contact' ]">NG Electron</a>
      <a [routerLink]="[ '/about' ]" class="about">About</a>
    </div>
  `,
  styleUrls: ['./home-discover.component.scss']
})
export class HomeDiscoverComponent { }
