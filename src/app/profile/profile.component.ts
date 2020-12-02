import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';
import { IItem } from '../interfaces/item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  items: IItem[]=[];
  name="";
  email=""
  description="";
  constructor( public cartService: CartService, private router: Router,public authService: AuthService) { }

  ngOnInit(): void {
    this.name=localStorage.getItem("name")
    this.email=localStorage.getItem("email")
    this.description=localStorage.getItem("description");
    console.log(this.name,this.description,this.email)
    this.cartService.updateCartList();
    this.cartService.getCart().subscribe((items2) => {
console.log(this.authService)
      this.items = items2['Items'];
      console.log(this.items)
    })
  }
  
  deleteItem(item){
    console.log(item)
    this.cartService.deleteFromCart(item);
  }


}
