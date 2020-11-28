import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable()
export class AuthService {
    
    messages = [];
    path = environment.path + '/auth';
    TOKEN_KEY = 'token';
    emailName="email";
    name="name"
    description="description"
    constructor ( private http: HttpClient){}
        
    get token(){
        return localStorage.getItem(this.TOKEN_KEY);
    }
    
    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    
    logout(){
        localStorage.clear();
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.emailName);
        localStorage.removeItem(this.name);
        localStorage.removeItem(this.description);
    }
        
    registerUser(registerData){
        this.http.post<any>(this.path + '/register', registerData).subscribe(res => {
            console.log(res)
            this.saveToken(res.token);
            this.saveData(registerData);
        });
        
    }
    
    loginUser(loginData){
        this.http.post<any>(this.path + '/login', loginData).subscribe(res => {
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
