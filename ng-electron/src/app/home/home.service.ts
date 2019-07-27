import { Injectable } from '@angular/core';
import { Contact } from './home.model';
import { spawn } from 'child_process';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HomeService {

  getContact(): Promise<Contact> {
    return new Promise<Contact>((resolve) => {
      const python = spawn('python', [`${environment.scripts.path}/user.py`]);
      python.stdout.on(
        'data', (data: any) => resolve(JSON.parse(data.toString('utf8')) as Contact)
      );
    });
  }
}
