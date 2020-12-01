import { Injectable } from '@angular/core';
// import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';
import { IItem } from "../interfaces/Item";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IItem[] = [];
  constructor(private http: HttpClient, private router: Router) { }

  addToCart(item) {
    this.http.post<{ message: string, item: IItem }>('http://localhost:3000/api/cart', item).subscribe((res) => {
      console.log(res);
      this.updateCartList();
    });
    console.log(item);
  }

  cartSize() {
    return this.items.length;
  }

  deleteFromCart(item) {
    console.log(item)//, item
    this.http.delete(`http://localhost:3000/api/cart/${item._id}`).subscribe((res) => {
      this.getCart().subscribe((item: IItem[]) => {
        this.items = item['Items'];
        console.log(this.items);
        window.location.reload();

      });

    });
  }
  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getCart() {
    return this.http.get(`http://localhost:3000/api/cart/`)
  }

  updateCartList() {
    this.getCart().subscribe((item: IItem[]) => {
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
        this.http.delete(`http://localhost:3000/api/cart/all`).subscribe(()=>{
         
        })
        console.log("SEND ORDER" + res);
      });
  }
}

