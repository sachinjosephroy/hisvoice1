import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  Contacts: any = [];

  constructor(public contact: ContactService) { }

  ngOnInit() {
    /* return this.contact.getContacts()
    .subscribe(contacts => {
      console.log(contacts);
    }); */

    this.loadContacts()
}

loadContacts() {
  return this.contact.getContacts().subscribe((data: {}) => {
    this.Contacts = data;
  })
}
}