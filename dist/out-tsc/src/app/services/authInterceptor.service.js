import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
let AuthInterceptorService = class AuthInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        const auth = this.injector.get(AuthService);
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + auth.token)
        });
        return next.handle(authRequest);
    }
};
AuthInterceptorService = __decorate([
    Injectable()
], AuthInterceptorService);
export { AuthInterceptorService };
//# sourceMappingURL=authInterceptor.service.js.map