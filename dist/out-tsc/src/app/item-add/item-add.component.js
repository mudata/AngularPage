import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ItemAddComponent = class ItemAddComponent {
    constructor(http, itemService, router) {
        this.http = http;
        this.itemService = itemService;
        this.router = router;
        this.item = {
            title: '',
            category: '',
            disc: '',
            image: '',
            price: null,
        };
    }
    ngOnInit() {
    }
    addItem() {
        this.itemService.addItem(this.item);
        this.item = {
            title: '',
            category: '',
            disc: '',
            image: '',
            price: null
        };
        this.router.navigate(['/list']);
    }
    onImagePicked(event) {
        const file = event.target.files[0];
        console.log(file);
        this.item.image = file;
        const reader = new FileReader();
        reader.onload = () => {
            this.imagePreview = reader.result;
            console.log(reader.result);
        };
        reader.readAsDataURL(file);
    }
};
ItemAddComponent = __decorate([
    Component({
        selector: 'app-item-add',
        templateUrl: './item-add.component.html',
        styleUrls: ['./item-add.component.css']
    })
], ItemAddComponent);
export { ItemAddComponent };
//# sourceMappingURL=item-add.component.js.map