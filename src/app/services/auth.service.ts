import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AlertService } from '../_alert';

@Injectable()
export class AuthService {
    options = {
        autoClose: true,
    };
    messages = [];
    path = environment.path + '/auth';
    TOKEN_KEY = 'token';
    emailName="email";
    name="name"
    description="description"
    constructor ( 
        private http: HttpClient,
        public alertService: AlertService
        ){}
        
    get token(){
        return localStorage.getItem(this.TOKEN_KEY);
    }
    
    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    get email(){
        if(localStorage.getItem(this.emailName)==="mudata191@abv.bg"){
            return true;
        }else{
            return false;
        }
    }
    
    logout(){
        localStorage.clear();
        this.alertService.success('Logged out!!', this.options);
    }
        
    registerUser(registerData){
        this.http.post<any>(this.path + '/register', registerData).subscribe(res => {
            console.log(res)
            this.alertService.success('Success Register!!', this.options);
            this.saveToken(res.token);
            this.saveData(registerData);
        });
        
    }
    
    loginUser(loginData){

        this.http.post<any>(this.path + '/login', loginData).subscribe(res => {
            this.alertService.success('Logged In!!', this.options);
            this.saveToken(res.token);
            this.saveData(loginData);
        });
    }
    
    saveToken(token){
        localStorage.setItem(this.TOKEN_KEY, token);
    }
    saveData(data){
        localStorage.setItem(this.emailName,data.email);
        localStorage.setItem(this.name,data.name);
        localStorage.setItem(this.description,data.description);
        console.log(localStorage)
    }
}
