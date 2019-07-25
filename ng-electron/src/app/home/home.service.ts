import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './home.model';

@Injectable({ providedIn: 'root' })
export class HomeService {

  getContact(): Observable<Contact> {
    // TODO: Call python script to get contact data
    return null;
  }
}
