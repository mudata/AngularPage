import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService} from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 // implements OnInit 
  loginData = {
    email:"",
      password:"",
      name:"",
      description:""
  };
  // form = {
  //   username: {
  //     touched: false,
  //     value: ''
  //   },
  //   password: {
  //     touched: false,
  //     value: ''
  //   }
  // };
  // constructor( private router: Router) {
  //   //private userService: UserService,
  //  }
  constructor ( public authService: AuthService, private router: Router){}
    
  post(){
    console.log(this.loginData)
    this.authService.loginUser(this.loginData);
    if(this.loginData.email=="mudata191@abv.bg"){
      this.router.navigate(['/admin']);
    }
    else{
      this.router.navigate(['']);
    }
   

}
  // ngOnInit() {

  // }
  // updateInputValue(name: 'username' | 'password', value: string): void {
  //   this.form[name].touched = true;
  //   this.form[name].value = value;
  //   console.log(this.form[name])
  // }
  // submitFormHandler(): void {
  //   console.log(this.form)
  //   //const { email: { value: email }, password: { value: password } } = this.form;
  //   // this.isLoading = true;
  //   // this.errorMessage = '';
  //   //this.userService.login({ email, password }).subscribe({
  //     //next: (data) => {
  //       // this.isLoading = false;
  //       // this.router.navigate(['/']);
  //     //},
  //     //error: (err) => {
  //       // this.errorMessage = 'ERROR!';
  //       // this.isLoading = false;
  //    // }
  //   //});
  // }

}
