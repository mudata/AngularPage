import { __decorate } from "tslib";
import { Component } from '@angular/core';
let EditComponent = class EditComponent {
    constructor(http, itemService, route, router) {
        this.http = http;
        this.itemService = itemService;
        this.route = route;
        this.router = router;
        this.item = {
            title: '',
            category: '',
            disc: '',
            image: '',
            quantity: 1,
            price: null,
        };
    }
    ngOnInit() {
        this.itemId = this.route.params.subscribe(params => {
            this.itemService.getItem(params['id']).subscribe((item) => {
                this.item = item;
                console.log(this.item);
                this.id = this.item._id;
            });
        });
    }
    editItem() {
        this.itemService.editItem(this.item, this.id);
        this.item = {
            title: '',
            category: '',
            disc: '',
            quantity: 1,
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
EditComponent = __decorate([
    Component({
        selector: 'app-edit',
        templateUrl: './edit.component.html',
        styleUrls: ['./edit.component.css']
    })
], EditComponent);
export { EditComponent };
//# sourceMappingURL=edit.component.js.map