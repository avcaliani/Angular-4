import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      // This way just check if field is not empty.
      // langName: new FormControl("", Validators.required)
      // And this is a little bit diffferent
      // langName: new FormControl("", this.textValidator)
      // And you can use this one too
      langName: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.pattern("Java|JAVA|java") // RegExr HueHue
      ]))
    });

  }

  textValidator = function(control) {
    if (control.value.length < 4) {
      return {'langName': true};
    }
  }

  onSubmit = function (language) {
    console.log(language);
    alert(language.langName);
  }

}
