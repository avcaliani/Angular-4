import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  items = ["Angular 4", "React", "Angular 4", "React", "Angular 4", "React", "Angular 4", "React", "Angular 4", "React"];

  constructor() { }

  ngOnInit() {
  }

}
