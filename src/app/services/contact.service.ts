import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AlertService } from '../_alert';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  options = {
    autoClose: true,
  };
  constructor(private http: HttpClient, private router: Router, public alertService: AlertService) { }
  sendEmail(email){
    this.http.post(`${apiUrl}/email`, email)
    this.router.navigate([""])
    
  }
  
}
