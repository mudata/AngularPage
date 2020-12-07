import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CartComponent = class CartComponent {
    constructor(cartService, router, authService) {
        this.cartService = cartService;
        this.router = router;
        this.authService = authService;
        this.contact = { name: "", tel: "", email: "" };
        this.items = [];
    }
    ngOnInit() {
        this.cartService.updateCartList();
        this.cartService.getCart().subscribe((items2) => {
            this.items = items2['Items'];
            console.log(this.items);
        });
        console.log('oninit');
        console.log(this.items);
    }
    deleteItem(item) {
        console.log(item);
        this.cartService.deleteFromCart(item);
    }
    addToCart(item) {
        this.cartService.addToCart(item);
        console.log("before open");
    }
    submitOrder() {
        console.log("submit order");
        console.log(this.contact);
        if (this.contact.name == "" || this.contact.email == "" || this.contact.tel == "") {
            return;
        }
        this.cartService.submitOrder(this.contact);
        this.router.navigate(['/list']);
    }
    stepUp(quantity) {
        console.log(quantity);
        console.log("up");
    }
    stepDown(quantity) {
        console.log(quantity);
        console.log("down");
    }
};
CartComponent = __decorate([
    Component({
        selector: 'app-cart',
        templateUrl: './cart.component.html',
        styleUrls: ['./cart.component.css']
    })
], CartComponent);
export { CartComponent };
//# sourceMappingURL=cart.component.js.map