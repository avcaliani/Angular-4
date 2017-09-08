import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  converterForm;
  calculating;

  constructor() { 
    this.calculating = false;
  }

  ngOnInit() {

    this.converterForm = new FormGroup({
      decimal: new FormControl(""),
      binary: new FormControl(""),
      octal: new FormControl(""),
      hexadecimal: new FormControl("")
    });

  }

  onSubmit = function (value) {
    console.log(value);
  }

  valueChanged = function (oldValue, newValue, key) {

    if (this.calculating) {
      return;
    }
    
    console.log("\n-------------------------------");
    console.log("Old: " + oldValue);
    console.log("New: " + newValue);
    console.log("Key: " + key);

    var _decimal;
    var _binary;
    var _octal;
    var _hexadecimal;

    this.calculating = true;

    if (newValue == "") {
      this.converterForm.patchValue({ decimal: "" });
      this.converterForm.patchValue({ binary: "" });
      this.converterForm.patchValue({ octal: "" });
      this.converterForm.patchValue({ hexadecimal: "" });

      this.calculating = false;
      return;
    }

    switch (key) {
      case "DECIMAL":
        _decimal = newValue;
        _binary = parseInt(newValue, 10).toString(2);
        _octal = parseInt(newValue, 10).toString(8);
        _hexadecimal = parseInt(newValue, 10).toString(16);
        break;
      case "BINARY":
        _decimal = parseInt(newValue, 2).toString(10);
        _binary = newValue;
        _octal = parseInt(newValue, 2).toString(8);
        _hexadecimal = parseInt(newValue, 2).toString(16);
        break;
      case "OCTAL":
        _decimal = parseInt(newValue, 8).toString(10);
        _binary = parseInt(newValue, 8).toString(2);
        _octal = newValue;
        _hexadecimal = parseInt(newValue, 8).toString(16);
        break;
      case "HEXADECIMAL":
        _decimal = parseInt(newValue, 16).toString(10);
        _binary = parseInt(newValue, 16).toString(2);
        _octal = parseInt(newValue, 16).toString(8);
        _hexadecimal = newValue;
        break;
    }

    this.converterForm.patchValue({ decimal: _decimal});
    this.converterForm.patchValue({ binary: _binary});
    this.converterForm.patchValue({ octal: _octal});
    this.converterForm.patchValue({ hexadecimal: _hexadecimal});

    this.calculating = false;
  }
}
