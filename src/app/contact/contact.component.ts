import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { AlertService } from '../_alert';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  options = {
    autoClose: true,
  };
  mail = { to: "46179r@unibit.bg", from: "", subject: "", text: "", name: "", tel: "", sendtype:"" }
  constructor(
    private http: HttpClient,
     private router: Router,
     public alertService: AlertService,
     public contactService:ContactService
     ) { }

  ngOnInit() {
  }


  sendMail() {
    console.log(this.mail);
    this.contactService.sendEmail(this.mail)
      this.alertService.success('Send Email!!', this.options);
  }

}
