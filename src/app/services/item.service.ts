import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IItem } from "../interfaces/item";
import { AlertService } from '../_alert';
const apiUrl = environment.apiUrl;
@Injectable()

export class ItemService {
  options = {
    autoClose: true,
};
  items: IItem[] = [];
  constructor(
    private router: Router,
    private http: HttpClient,
    public alertService: AlertService
    ) { }
  loadItemList(): Observable<IItem[]> {
    return this.http.get<IItem[]>(`${apiUrl}/item`);
  }
  editItem(item, id) {
    const ItemDate = new FormData();
    ItemDate.append("title", item.title);
    ItemDate.append("disc", item.disc);
    ItemDate.append("category", item.category);
    ItemDate.append("price", item.price);
    ItemDate.append("image", item.image);
    
    console.log(ItemDate)
    let nn = { id: id, ItemDate: ItemDate }
    this.http.put(`${apiUrl}/item/${nn}`, item)
      .subscribe(() => {

        this.alertService.info('Edited Item!!', this.options);
     
      });
      this.router.navigate(['/list'])
  }
  addItem(item) {
    const ItemDate = new FormData();
    ItemDate.append("title", item.title);
    ItemDate.append("disc", item.disc);
    ItemDate.append("category", item.category);
    ItemDate.append("price", item.price);
    ItemDate.append("image", item.image);
    
    this.http.post<{ message: string, item: IItem }>(`${apiUrl}/item`, ItemDate)
      .subscribe((res) => {///api/item
        const resdish = res.item;
        this.items.push(resdish);
        this.alertService.success('Added Item!!', this.options)
      });
  }
  getItems() {
    return this.http.get(`http://localhost:3000/api/item/`)
  }
  updateItemList() {
    this.getItems().subscribe((items: IItem[]) => {
      this.items = items['Items'];
    });
  }
  deleteItem(item) {
    this.alertService.success('Delete Item!!', this.options)
    return this.http.delete(`http://localhost:3000/api/item/${item._id}`);
  }
  getItem(id) {
    return this.http.get(`http://localhost:3000/api/item/${id}`);
  }



}
