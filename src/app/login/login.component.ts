import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  loginData = {
    email: "",
    password: "",
  };

  constructor(
    public authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  post() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loginData = {
    email: this.f.username.value,
    password: this.f.password.value,
  };
    this.authService.loginUser(this.loginData);
    if(this.loginData.email=="mudata191@abv.bg"){
      this.router.navigate(['']);
    }
    else{
      this.router.navigate(['']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
}


