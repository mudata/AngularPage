
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'retister',
  templateUrl: 'register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
    loading = false;
    submitted = false;
  registerData = {
    email: "",
    password: "",
    name: "",
    description: ""
  };

  constructor(
    public authService: AuthService,
      private router: Router,
      private formBuilder: FormBuilder,
      ) { }

  post() {
    this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
    console.log(this.registerForm.value);
    this.registerData = {
      email: this.registerForm.value.firstName,
      password: this.registerForm.value.password,
      name: this.registerForm.value.lastName,
      description: this.registerForm.value.username
    };
    this.authService.registerUser(this.registerData);
    this.router.navigate(['']);
  
  }
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  get f() { return this.registerForm.controls; }

}
