import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Contact } from '../home.model';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {

  prod = environment.production;
  loading = true;
  contact: Contact;
  constructor(private service: HomeService) { }

  ngOnInit(): void {
    this.service.getContact().then(
      (data: Contact) => {
        console.log('Received data from Python script: ', data);
        this.contact = data;
        this.loading = false;
      }
    );
  }

}
