import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  url;

  constructor(private http: Http) {
    this.url = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
  }

  fetchData(){
    this.http.get(this.url).map(
      (response) => response.json()
    ).subscribe(
      (data) => console.log(data)
    );
  }

}
