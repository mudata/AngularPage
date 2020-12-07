import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IItem } from "../interfaces/item";
const apiUrl = environment.apiUrl;
@Injectable()

export class ItemService {
  items: IItem[] = [];
  constructor(private http: HttpClient) { }
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
      .subscribe((res) => {
      });
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
    return this.http.delete(`http://localhost:3000/api/item/${item._id}`);
  }
  getItem(id) {
    return this.http.get(`http://localhost:3000/api/item/${id}`);
  }



}
