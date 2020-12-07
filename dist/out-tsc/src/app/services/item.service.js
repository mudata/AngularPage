import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;
let ItemService = class ItemService {
    constructor(http) {
        this.http = http;
        this.items = [];
    }
    loadItemList() {
        return this.http.get(`${apiUrl}/item`);
    }
    editItem(item, id) {
        console.log(id);
        console.log(item);
        const ItemDate = new FormData();
        ItemDate.append("title", item.title);
        ItemDate.append("disc", item.disc);
        ItemDate.append("category", item.category);
        ItemDate.append("price", item.price);
        ItemDate.append("image", item.image);
        console.log(ItemDate);
        let nn = { id: id, ItemDate: ItemDate };
        this.http.put(`${apiUrl}/item/${nn}`, item)
            .subscribe((res) => {
            console.log("post");
            console.log(res);
            console.log(this.items);
            //this.updateItemList();
        });
    }
    addItem(item) {
        const ItemDate = new FormData();
        ItemDate.append("title", item.title);
        ItemDate.append("disc", item.disc);
        ItemDate.append("category", item.category);
        ItemDate.append("price", item.price);
        ItemDate.append("image", item.image);
        console.log(item);
        console.log(ItemDate);
        //console.log([...ItemDate])
        this.http.post(`${apiUrl}/item`, ItemDate)
            .subscribe((res) => {
            console.log("post");
            console.log(res);
            const resdish = res.item;
            //this.toastr.success('Added');
            this.items.push(resdish);
            console.log(this.items);
            //this.updateItemList();
        });
    }
    getItems() {
        return this.http.get(`http://localhost:3000/api/item/`);
    }
    updateItemList() {
        this.getItems().subscribe((items) => {
            this.items = items['Items'];
            console.log(this.items);
        });
    }
    deleteItem(item) {
        console.log(item);
        return this.http.delete(`http://localhost:3000/api/item/${item._id}`);
    }
    getItem(id) {
        return this.http.get(`http://localhost:3000/api/item/${id}`);
    }
};
ItemService = __decorate([
    Injectable()
], ItemService);
export { ItemService };
//# sourceMappingURL=item.service.js.map