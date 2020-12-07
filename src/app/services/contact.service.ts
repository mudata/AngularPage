import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../_alert';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  options = {
    autoClose: true,
  };
  constructor(private http: HttpClient, private router: Router, public alertService: AlertService) { }
  sendEmail(email){
    this.http.post('http://localhost:3000/api/email', email)
    this.router.navigate([""])
    
  }
  
}
