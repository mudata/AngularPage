import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../services/item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { Item } from '../models/item';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { CommentsService } from '../services/comments.service';
import { AlertService } from '../_alert';
const apiUrl = environment.apiUrl;
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  options = {
    autoClose: true,
  };
  item: Item;
  itemId;
  commentform: FormGroup;
  comment = { newComment: "" }
  constructor(
    private http: HttpClient,
    public itemservice: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    public cartService: CartService,
    public commentService: CommentsService,
     public alertService: AlertService
  ) { }

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
  commentIdea(item) {
    console.log(this.comment, item._id);
    let idOfItem = item._id;
    let text = this.comment.newComment;
    let email = localStorage.getItem("email")
    let data = { idOfItem, text };
    this.commentService.addComment(email, data);
    this.alertService.success('Add Comment!!', this.options);
    this.itemservice.getItem(idOfItem).subscribe((item: Item) => {

      this.item = item;
      console.log(this.item);

    });
  }

}
