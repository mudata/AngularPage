import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from '../../interfaces/item';
import { ItemService } from '../../services/item.service';
import { AlertService } from '../../alert';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: any
  item: IItem = {
    title: '',
    category: '',
    disc: '',
    image: '',
    quantity: 1,
    price: null,
    comments:[]
  };
  imagePreview: any;
  image;
  itemId;
  options = {
    autoClose: true,
  };

  constructor(private http: HttpClient, public itemService: ItemService, private route: ActivatedRoute, public alertService: AlertService, private router: Router) { }

  ngOnInit(): void {
    this.itemId = this.route.params.subscribe(params => {
      this.itemService.getItem(params['id']).subscribe((item: IItem) => {

        this.item = item;
        console.log(this.item);
        this.id = this.item._id;
      });
    });
  }
  editItem() {
    this.itemService.editItem(this.item, this.id);
    this.http.delete(`http://localhost:3000/api/item/${this.id}`);
    this.item = {
      title: '',
      category: '',
      disc: '',
      quantity: 1,
      image: '',
      price: null,
      comments:[]
    };
    this.alertService.success('Edited Item!!', this.options)
  }
  onImagePicked(event) {
    const file = event.target.files[0];
    console.log(file);
    this.item.image = file;
    console.log(file)
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  }
}
