import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html'
})
export class ClientHomeComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    console.log('Client Home Component', this.appService.whoami());
  }

}
