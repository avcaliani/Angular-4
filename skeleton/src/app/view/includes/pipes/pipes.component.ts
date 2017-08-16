import { Component, OnInit } from '@angular/core';
import { Person } from './../../../model/person';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  public developer: Person;
  array = null;

  constructor() { 
    
    this.developer = new Person();
    this.developer.name = "anthony vilarim caliani";
    this.developer.github = "GITHUB.COM/AVCALIANI";
    this.developer.bornDate = new Date(1997, 3, 9);

    this.array = [];
  }

  ngOnInit() {
    this.array = [1,4,2,6,9];
  }

}
