import { Component } from '@angular/core';

@Component({
  selector: 'app-home-image',
  template: '<div class="logo"><img src="assets/img/logo.svg"></div>',
  styles: [
    '.logo img { width: 256px; height: auto; display: block; margin: 5em auto 2em auto; }'
  ]
})
export class HomeImageComponent { }
