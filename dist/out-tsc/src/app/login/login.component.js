import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let LoginComponent = class LoginComponent {
    constructor(authService, router, formBuilder, alertService) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.loginData = {
            email: "",
            password: "",
        };
    }
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
        if (this.loginData.email == "mudata191@abv.bg") {
            this.router.navigate(['']);
        }
        else {
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
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map