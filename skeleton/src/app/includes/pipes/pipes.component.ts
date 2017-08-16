import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  developer = null;
  array = null;

  constructor() { 
    this.developer = {};
    this.array = [];
  }

  ngOnInit() {
    this.developer.name = "anthony vilarim caliani";
    this.developer.github = "GITHUB.COM/AVCALIANI";
    this.developer.bornDate = new Date(1997, 3, 9);

    this.array = [1,4,2,6,9];
  }

}
