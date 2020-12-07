import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;
let ItemListComponent = class ItemListComponent {
    // @ViewChild('movieSearchInput', { static: true }) movieSearchInput: ElementRef;
    constructor(cartService, itemService, http) {
        this.cartService = cartService;
        this.itemService = itemService;
        this.http = http;
        this.results = [];
        this.selected = '';
    }
    ngOnInit() {
        this.itemService.loadItemList().subscribe((items2) => {
            this.items = items2['Items'];
            const map1 = items2['Items'].map(x => x.category);
            //console.log(map1)
            this.categories = [...new Set(map1)];
            this.items.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });
            //console.log(this.categories)
        });
    }
    deleteItem(item) {
        this.itemService.deleteItem(item).subscribe(() => {
            this.itemService.updateItemList();
        });
    }
    addToCart(item) {
        this.cartService.addToCart(item);
    }
    searchItem(category) {
        if (category === null) {
            this.items = [];
            this.itemService.loadItemList().subscribe((items2) => {
                this.items = items2;
                return;
            });
        }
        this.items = [];
        this.itemService.loadItemList().subscribe((items2) => {
            items2['Items'].forEach(element => {
                if (element.category == category) {
                    this.items.push(element);
                }
            });
            // console.log(this.items)
        });
    }
    searchBar() {
        let text = document.getElementById('search').value;
        console.log(text);
        let option = document.getElementsByName('choices-single-defaul')[0].value;
        console.log(option);
        this.items = [];
        this.itemService.loadItemList().subscribe((items2) => {
            if (option == "Vsichki") {
                if (text == "") {
                    this.items = items2["Items"];
                    return;
                }
                else {
                    const reg = RegExp(`${text.toLowerCase()}`);
                    let newarr = [];
                    console.log(newarr);
                    items2["Items"].forEach(element => {
                        if (reg.test(element.title.toLowerCase()) == true) {
                            newarr.push(element);
                        }
                    });
                    this.items = newarr;
                    console.log(newarr);
                }
            }
            else {
                items2['Items'].forEach(element => {
                    if (element.category == option) {
                        this.items.push(element);
                    }
                });
                const reg = RegExp(`${text.toLowerCase()}`);
                let newarr = [];
                console.log(newarr);
                this.items.forEach(element => {
                    if (reg.test(element.title.toLowerCase()) == true) {
                        newarr.push(element);
                    }
                });
                this.items = newarr;
                console.log(this.items);
            }
        });
    }
    selectChangeHandler(event) {
        this.selected = event.target.value;
        if (this.selected == "ime") {
            this.items.sort((a, b) => {
                return a.title.localeCompare(b.title);
            });
            // console.log(this.items);
        }
        if (this.selected == "naievtini") {
            this.items.sort((a, b) => {
                return a.price - b.price;
            });
            // console.log(this.items);
        }
        if (this.selected == "naiskupi") {
            this.items.sort((a, b) => {
                return b.price - a.price;
            });
            // console.log(this.items);
        }
    }
};
ItemListComponent = __decorate([
    Component({
        selector: 'app-item-list',
        templateUrl: './item-list.component.html',
        styleUrls: ['./item-list.component.css']
    })
], ItemListComponent);
export { ItemListComponent };
//# sourceMappingURL=item-list.component.js.map