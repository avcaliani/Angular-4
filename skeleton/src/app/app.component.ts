import { Component, OnInit } from '@angular/core';
import { MyDataService } from './service/my-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  myDataService;

  constructor(private newService: MyDataService){

    /**
     * To use this serveice in everywhere.
     * You just have to import and use like here.
     */
    this.myDataService = newService;
  }

  ngOnInit() {
    console.log(this.myDataService.success());
    console.log(this.myDataService.me);

    this.myDataService.me.lastUpdatedAt = "APP Component";
  }

}
