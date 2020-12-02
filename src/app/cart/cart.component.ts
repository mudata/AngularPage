import { AfterViewInit, Component, OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item'
import { Router } from '@angular/router';
import { IItem } from "../interfaces/item";
import { ItemService } from '../services/item.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  contact = { name: "", tel: "", email:"" };
  constructor( 
    public cartService: CartService,
     private router: Router,
     public authService: AuthService
     ) { }

  items: IItem[]=[];

  ngOnInit() {
    this.cartService.updateCartList();
    this.cartService.getCart().subscribe((items2) => {

      this.items = items2['Items'];
      console.log(this.items)
    })
    console.log('oninit')
    console.log(this.items)
  }
  

  deleteItem(item){
    console.log(item)
    this.cartService.deleteFromCart(item);
  }

  addToCart(item) {
    this.cartService.addToCart(item);
    console.log("before open");
  }

  submitOrder() {
  console.log("submit order");
  console.log(this.contact)
  if(this.contact.name==""||this.contact.email==""||this.contact.tel==""){
    return;
  }
    this.cartService.submitOrder(this.contact);
    this.router.navigate(['/list']);
  }
}
