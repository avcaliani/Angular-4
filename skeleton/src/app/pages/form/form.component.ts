import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  items = ["Angular 4"];
  newItem: string = "";

  constructor() { }

  ngOnInit() {
  }

  pushItem = function() {
    if (this.newItem != ""){
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }

  removeItem = function(index) {
    this.items.splice(index, 1);
  }

}
