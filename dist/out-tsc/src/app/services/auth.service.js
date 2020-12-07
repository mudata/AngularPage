import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.messages = [];
        this.path = environment.path + '/auth';
        this.TOKEN_KEY = 'token';
        this.emailName = "email";
        this.name = "name";
        this.description = "description";
    }
    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }
    get isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }
    get email() {
        if (localStorage.getItem(this.emailName) === "mudata191@abv.bg") {
            return true;
        }
        else {
            return false;
        }
    }
    logout() {
        localStorage.clear();
    }
    registerUser(registerData) {
        this.http.post(this.path + '/register', registerData).subscribe(res => {
            console.log(res);
            this.saveToken(res.token);
            this.saveData(registerData);
        });
    }
    loginUser(loginData) {
        this.http.post(this.path + '/login', loginData).subscribe(res => {
            this.saveToken(res.token);
            this.saveData(loginData);
        });
    }
    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }
    saveData(data) {
        localStorage.setItem(this.emailName, data.email);
        localStorage.setItem(this.name, data.name);
        localStorage.setItem(this.description, data.description);
        console.log(localStorage);
    }
};
AuthService = __decorate([
    Injectable()
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map