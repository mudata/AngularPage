import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from "../interfaces/item";
import { Router } from '@angular/router';
import { AlertService } from '../_alert';
import { environment } from 'src/environments/environment';
const apiUrl = environment.apiUrl;
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
    this.http.post<{ message: string, item: IItem }>(`${apiUrl}/cart`, item).subscribe((res) => {
      this.alertService.success('Item Added To Cart!!', this.options);  
    this.updateCartList();
    });
  }

  cartSize() {
    return this.items.length;
  }

  deleteFromCart(item) {
    this.http.delete(`${apiUrl}/cart/${item._id}`).subscribe((res) => {
      this.updateCartList()
    });
    
      this.alertService.success('Item Delete From Cart!!', this.options);  
  
  }
  calculateTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getCart() {
    return this.http.get(`${apiUrl}/cart`)
  }

  updateCartList() {
    this.getCart().subscribe((item: IItem[]) => {
      this.items = item['Items'];
    });
  }

  submitOrder(contact) {
    const orderData = { "contact": contact, "items": this.items };
    
    this.http.post(`${apiUrl}/order`, orderData)
      .subscribe(() => {
        console.log("SEND ORDER" + orderData);
      })
      
      this.http.delete(`${apiUrl}/cart/all`).subscribe(() => {
        this.alertService.success('Submit Order!!', this.options);
        this.alertService.success('Delete Cart!!', this.options)
        this.updateCartList();
        })
  }
  increaseQuantity(quantity, id) {
    this.alertService.success('Increase Quantity!!', this.options)
    this.http.put(`${apiUrl}/cart`, { quantity, id, increase: "" }).subscribe((res) => {
      // this.updateCartList();
    });
  }
  decreaseQuantity(quantity, id) {
    
    if (quantity == "1") {
      this.http.delete(`${apiUrl}/cart/${id}`).subscribe((res) => {
        this.getCart().subscribe((item: IItem[]) => {
          this.items = item['Items'];
          // window.location.reload();
        });
return;
      });
    }
    this.alertService.success('Decrease Quantity!!', this.options)
    this.http.put(`${apiUrl}/cart`, { quantity, id, decrease: "" }).subscribe((res) => {
      // this.updateCartList();
    });
  }

}

