import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html'
})
export class AdminHomeComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
    console.log('Admin Home Component', this.appService.whoami());
  }

 }
