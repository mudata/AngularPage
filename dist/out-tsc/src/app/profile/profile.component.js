import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProfileComponent = class ProfileComponent {
    constructor(cartService, router, authService) {
        this.cartService = cartService;
        this.router = router;
        this.authService = authService;
        this.items = [];
        this.name = "";
        this.email = "";
        this.description = "";
    }
    ngOnInit() {
        this.name = localStorage.getItem("name");
        this.email = localStorage.getItem("email");
        this.description = localStorage.getItem("description");
        console.log(this.name, this.description, this.email);
        this.cartService.updateCartList();
        this.cartService.getCart().subscribe((items2) => {
            console.log(this.authService);
            this.items = items2['Items'];
            console.log(this.items);
        });
    }
    deleteItem(item) {
        console.log(item);
        this.cartService.deleteFromCart(item);
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map