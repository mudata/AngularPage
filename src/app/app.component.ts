import { Component, OnChanges, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CartService } from './services/cart.service';
import { Item } from './models/item';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnChanges {

  constructor(public cartService: CartService,public router:Router) { }

  ngOnInit() {
  }
  ngOnChanges(){
  }
}
