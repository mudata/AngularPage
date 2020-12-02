import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AlertService } from '../services/alert.service';

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
    private alertService: AlertService
  ) { }

  post() {
    this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

    // console.log(this.loginData)
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

