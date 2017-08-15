import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  developer = null;

  constructor() { 
    this.developer = {};
  }

  ngOnInit() {
    this.developer.name = "anthony vilarim caliani";
    this.developer.github = "GITHUB.COM/AVCALIANI";
    this.developer.bornDate = new Date(1997, 3, 9);
  }

}
