import { Component } from '@angular/core';

// Services
import { MyHttpService } from '../../services/my-http.service';

// Model
import { Config } from '../../model/config';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  uuid: string;
  error: any;
  config: Config;
  obsConfig: Config;

  constructor(private myService: MyHttpService) { }

  fnUUID() {
    this.myService.getUUID().subscribe(
      (data) => {
        this.uuid = data['uuid'];
        console.log('Main.fnUUID().data', data);
      }
    );
  }

  fnConfig() {
    this.myService.getConfig().subscribe(
      (data) => {
        this.config = {...data};
        console.log('Main.fnConfig().data', data);
      }
    );
  }

  fnObservableConfig() {
    this.myService.getObservableConfig().subscribe(
      (data) => {
        this.obsConfig = {...data.body};
        console.log('Main.fnObservableConfig().data', data);
      }
    );
  }

  fnError() {
    this.myService.getError().subscribe(
      (data) => { /* Success */
        console.log('Main.fnError().data', data);
      },
      (err) => { /* Error */
        this.error = err;
        console.log('Main.fnError().err', err);
      }
    );
  }
}
