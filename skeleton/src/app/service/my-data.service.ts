import { Injectable } from '@angular/core';

@Injectable()
export class MyDataService {

  me;

  constructor() { 
    this.me = {
      id: 1,
      name: "Anthony Caliani",
      github: "https://github.com/avcaliani"
    };
  }

  success() {
    return "Successful";
  }

}
