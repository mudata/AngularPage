import { Component, OnInit } from '@angular/core';
// import { Item } from '../models/item';
// import {} from '.../backend/models/item';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ItemService } from '../services/item.service';
import { IItem } from "../interfaces/item";


@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {



  item: IItem = {
    title: '',
    category: '',
    disc: '',
    image: '',
    price: null,
  };
  imagePreview: any;
  image;

  constructor(private http: HttpClient, public itemService: ItemService, private router: Router) { }



  ngOnInit() {
  }

  addItem() {
   
  
    this.itemService.addItem(this.item);
    this.item = {
      title: '',
      category: '',
      disc: '',
      image: '',
      price: null
    };
    this.router.navigate(['/list']);
    
  }

  onImagePicked(event) {
    const file = event.target.files[0];
    console.log(file);
    this.item.image = file;
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }
}
