import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-language',
  templateUrl: './register-language.component.html',
  styleUrls: ['./register-language.component.css']
})
export class RegisterLanguageComponent implements OnInit {

  langForm;

  constructor() { }

  ngOnInit() {

    this.langForm = new FormGroup({
      langName: new FormControl("java")
    });

  }

  onSubmit = function (language) {
    console.log(language);
    alert(language.langName);
  }

}
