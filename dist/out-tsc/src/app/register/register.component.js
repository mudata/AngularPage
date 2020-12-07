import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(authService, router, formBuilder, alertService) {
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.registerData = {
            email: "",
            password: "",
            name: "",
            description: ""
        };
    }
    post() {
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
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
    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    get f() { return this.registerForm.controls; }
};
RegisterComponent = __decorate([
    Component({
        selector: 'retister',
        templateUrl: 'register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map