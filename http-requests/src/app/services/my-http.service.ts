import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

// Model
import { Config } from '../model/config';

@Injectable()
export class MyHttpService {

  apiRoot: string = null;

  constructor(private http: HttpClient) {
    this.apiRoot = 'http://httpbin.org';
  }

  getUUID() {
    return this.http.get(`${this.apiRoot}/uuid`)
      .pipe(
        catchError(this.handleError) /* Generic Error Handler */
      );
  }

  getConfig(): Observable<Config> {
    return this.http.get<Config>(`${this.apiRoot}/get`)
      .pipe(
        catchError(this.handleError) /* Generic Error Handler */
      );
  }

  // { observe: 'response' } -> indicates that I want full response object
  getObservableConfig(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      `${this.apiRoot}/get`, { observe: 'response' }
    ).pipe(
        catchError(this.handleError) /* Generic Error Handler */
      );
  }

  getError() {
    return this.http.get(`${this.apiRoot}/status/418`)
      .pipe(
        retry(3), /* Optional */
        catchError(this.handleError) /* Generic Error Handler */
      );
  }

  // Private Functions ------------------------------------------------------------------
  private handleError(err: HttpErrorResponse) {
    console.log('MyHttp.handleError().err', err);
    return new ErrorObservable('Something bad happened; please try again later.');
  }
}
