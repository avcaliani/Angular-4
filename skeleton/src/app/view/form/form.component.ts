import { Component, OnInit } from '@angular/core';
import { MyDataService } from '../../service/my-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  myDataService;

  constructor(private newService: MyDataService) { 
    this.myDataService = newService;
  }

  ngOnInit() {
    console.log(this.myDataService.success());
    console.log(this.myDataService.me);
    
    this.myDataService.me.lastUpdatedAt = "FORM Component";
  }

}
