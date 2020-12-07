import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AlertService } from '../_alert';
const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  options = {
    autoClose: true,
  };
  constructor(
    private http: HttpClient,
    private router: Router,
    public alertService: AlertService
  ) { }
  addComment(email, data) {
    this.http.put(`${apiUrl}/item/${email}`, data)
      .subscribe((res) => {

      });
  }
}
