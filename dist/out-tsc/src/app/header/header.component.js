import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HeaderComponent = class HeaderComponent {
    constructor(cartService, authService) {
        this.cartService = cartService;
        this.authService = authService;
    }
    ngOnInit() {
        console.log(this.authService);
        //     this.lo=localStorage.getItem("email");
        // console.log(this.lo)
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    })
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map