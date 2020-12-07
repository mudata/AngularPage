import { Injectable } from '@angular/core';
// import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';
import { IItem } from "../interfaces/item";
import { Router } from '@angular/router';
import { AlertService } from '../_alert';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  options = {
    autoClose: true,
  };
  items: IItem[] = [];
  constructor(
    private http: HttpClient,
     private router: Router,
     public alertService: AlertService
     ) { }

  addToCart(item) {
    this.http.post<{ message: string, item: IItem }>('http://localhost:3000/api/cart', item).subscribe((res) => {
      this.alertService.success('Item Added To Cart!!', this.options);  
    this.updateCartList();
    });
  }

  cartSize() {
    return this.items.length;
  }

  deleteFromCart(item) {
    this.http.delete(`http://localhost:3000/api/cart/${item._id}`).subscribe((res) => {
      this.getCart().subscribe((item: IItem[]) => {
        this.items = item['Items'];
        this.alertService.success('Item Delete From Cart!!', this.options);  
       // window.location.reload();
      });

    });
  }
  calculateTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getCart() {
    return this.http.get(`http://localhost:3000/api/cart/`)
  }

  updateCartList() {
    this.getCart().subscribe((item: IItem[]) => {
      this.items = item['Items'];
    });
  }

  submitOrder(contact) {
    const orderData = { "contact": contact, "items": this.items };
    
    this.http.post('http://localhost:3000/api/order', orderData)
      .subscribe(() => {
        console.log("SEND ORDER" + orderData);
      })
      
      this.http.delete(`http://localhost:3000/api/cart/all`).subscribe(() => {
        this.alertService.success('Submit Order!!', this.options);
        this.alertService.success('Delete Cart!!', this.options)
        this.updateCartList();
        })
  }
  increaseQuantity(quantity, id) {
    this.alertService.success('Increase Quantity!!', this.options)
    this.http.put('http://localhost:3000/api/cart', { quantity, id, increase: "" }).subscribe((res) => {
      // this.updateCartList();
    });
  }
  decreaseQuantity(quantity, id) {
    
    if (quantity == "1") {
      this.http.delete(`http://localhost:3000/api/cart/${id}`).subscribe((res) => {
        this.getCart().subscribe((item: IItem[]) => {
          this.items = item['Items'];
          // window.location.reload();
        });
return;
      });
    }
    this.alertService.success('Decrease Quantity!!', this.options)
    this.http.put('http://localhost:3000/api/cart', { quantity, id, decrease: "" }).subscribe((res) => {
      // this.updateCartList();
    });
  }

}

