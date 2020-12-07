import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
        this.messages = [];
        this.users = [];
        this.path = environment.path;
    }
    getMessages(userId) {
        this.http.get(this.path + '/posts/' + userId).subscribe(res => {
            this.messages = res;
        });
    }
    postMessage(message) {
        this.http.post(this.path + '/post', message).subscribe(res => {
        });
    }
    getUsers() {
        this.http.get(this.path + '/users').subscribe(res => {
            this.users = res;
        });
    }
    getProfile(id) {
        return this.http.get(this.path + '/profile/' + id);
    }
};
ApiService = __decorate([
    Injectable()
], ApiService);
export { ApiService };
//# sourceMappingURL=api.service.js.map