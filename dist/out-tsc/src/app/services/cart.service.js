import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let CartService = class CartService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.items = [];
    }
    addToCart(item) {
        this.http.post('http://localhost:3000/api/cart', item).subscribe((res) => {
            console.log(res);
            this.updateCartList();
        });
        console.log(item);
    }
    cartSize() {
        return this.items.length;
    }
    deleteFromCart(item) {
        console.log(item); //, item
        this.http.delete(`http://localhost:3000/api/cart/${item._id}`).subscribe((res) => {
            this.getCart().subscribe((item) => {
                this.items = item['Items'];
                console.log(this.items);
                window.location.reload();
            });
        });
    }
    calculateTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    getCart() {
        return this.http.get(`http://localhost:3000/api/cart/`);
    }
    updateCartList() {
        this.getCart().subscribe((item) => {
            this.items = item['Items'];
            console.log(this.items);
            //return this.items;
        });
    }
    submitOrder(contact) {
        const orderData = { "contact": contact, "items": this.items };
        console.log("SEND ORDER" + orderData);
        return this.http.post('http://localhost:3000/api/order', orderData)
            .subscribe((res) => {
            this.http.delete(`http://localhost:3000/api/cart/all`).subscribe(() => {
            });
            console.log("SEND ORDER" + res);
        });
    }
};
CartService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CartService);
export { CartService };
//# sourceMappingURL=cart.service.js.map