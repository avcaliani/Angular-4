import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  whoami(): string {
    return 'App Service Here!';
  }
}
