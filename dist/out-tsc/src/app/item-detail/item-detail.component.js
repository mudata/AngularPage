import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;
let ItemDetailComponent = class ItemDetailComponent {
    constructor(http, itemservice, router, route, cartService) {
        this.http = http;
        this.itemservice = itemservice;
        this.router = router;
        this.route = route;
        this.cartService = cartService;
        this.comment = { newComment: "" };
    }
    ngOnInit() {
        this.itemId = this.route.params.subscribe(params => {
            this.itemservice.getItem(params['id']).subscribe((item) => {
                this.item = item;
                console.log(this.item);
            });
        });
    }
    addToCart(item) {
        this.cartService.addToCart(item);
    }
    commentIdea(item) {
        console.log(this.comment, item._id);
        let idOfItem = item._id;
        let text = this.comment.newComment;
        let email = localStorage.getItem("email");
        let data = { idOfItem, text };
        this.http.put(`${apiUrl}/item/${email}`, data)
            .subscribe((res) => {
        });
        //   Item.updateOne({age:{$gte:5}},  
        //     {name:"ABCD"}, function (err, docs) { 
        //     if (err){ 
        //         console.log(err) 
        //     } 
        //     else{ 
        //         console.log("Updated Docs : ", docs); 
        //     } 
        // }); 
    }
};
ItemDetailComponent = __decorate([
    Component({
        selector: 'app-item-detail',
        templateUrl: './item-detail.component.html',
        styleUrls: ['./item-detail.component.css']
    })
], ItemDetailComponent);
export { ItemDetailComponent };
//# sourceMappingURL=item-detail.component.js.map