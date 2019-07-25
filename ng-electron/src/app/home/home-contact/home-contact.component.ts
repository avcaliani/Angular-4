import { Component, OnInit } from '@angular/core';
import { Contact } from '../home.model';
import { HomeService } from '../home.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.scss']
})
export class HomeContactComponent implements OnInit {

  prod = environment.production;
  online = false;
  contact: Contact;
  constructor(private service: HomeService) { }

  ngOnInit(): void {
    // TODO: Get data from service
    this.contact = {
      name: 'Anthony Caliani',
      tag: '@avcaliani',
      github: 'https://github.com/avcaliani',
      gitlab: 'https://gitlab.com/avcaliani'
    };
  }
}
