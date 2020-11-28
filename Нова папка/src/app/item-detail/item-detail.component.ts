import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item: Item;
  itemId;

  constructor(private http: HttpClient, public itemservice: ItemService, private router: Router, private route: ActivatedRoute, public cartService: CartService) { }

  ngOnInit() {
    this.itemId = this.route.params.subscribe(params => {
      this.itemservice.getItem(params['id']).subscribe((item: Item) => {

        this.item = item;
        console.log(this.item);

      });
    });
  }

  addToCart(item) {
    this.cartService.addToCart(item);
  }

}
