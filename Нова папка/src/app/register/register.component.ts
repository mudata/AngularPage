// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })

// export class RegisterComponent implements OnInit {

//   Roles: any = ['Admin', 'Author', 'Reader'];
//   form = {
//     username: {
//       touched: false,
//       value: ''
//     },
//     rePassword: {
//       touched: false,
//       value: ''
//     },
//     password: {
//       touched: false,
//       value: ''
//     }
//   };
//   constructor() { }

//   ngOnInit() {
//   }
//   updateInputValue(name: 'username' | 'password' | 'rePassword', value: string): void {
//     this.form[name].touched = true;
//     this.form[name].value = value;
//     console.log(this.form[name])
//   }
//   submitFormHandler(): void {
//     console.log(this.form)
//     //const { email: { value: email }, password: { value: password } } = this.form;
//     // this.isLoading = true;
//     // this.errorMessage = '';
//     //this.userService.login({ email, password }).subscribe({
//       //next: (data) => {
//         // this.isLoading = false;
//         // this.router.navigate(['/']);
//       //},
//       //error: (err) => {
//         // this.errorMessage = 'ERROR!';
//         // this.isLoading = false;
//      // }
//     //});
//   }
// }
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'retister',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  registerData = {
    email: "",
    password: "",
    name: "",
    description: ""
  };

  constructor(public authService: AuthService,  private router: Router) { }

  post() {
    console.log(this.registerData);
    this.authService.registerUser(this.registerData);
    this.router.navigate(['/about']);
  
  }
}
