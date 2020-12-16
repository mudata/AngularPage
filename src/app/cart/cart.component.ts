import { AfterViewInit, Component, OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
import { IItem } from "../interfaces/item";
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  options = {
    autoClose: true,
  };
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
    this.cartService.getCart().subscribe((items2) => {

      this.items = items2['Items'];
    });
    
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
  stepUp(quantity,id){
    console.log(quantity)
    console.log("up")
    this.cartService.increaseQuantity(quantity,id);
    window.location.reload();
  }
  stepDown(quantity,id){
    console.log(quantity)
    console.log("down")
    this.cartService.decreaseQuantity(quantity,id);
    window.location.reload();
  }
}
