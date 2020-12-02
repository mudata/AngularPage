import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IItem } from "../interfaces/Item";
const apiUrl = environment.apiUrl;
@Injectable()

export class ItemService {
  items: IItem[] = [];
  constructor(private http: HttpClient) { }
  loadItemList(): Observable<IItem[]> {
    return this.http.get<IItem[]>(`${apiUrl}/item`);
  }
  addItem(item) {
    const ItemDate = new FormData();
    ItemDate.append("title", item.title);
    ItemDate.append("disc", item.disc);
    ItemDate.append("category", item.category);
    ItemDate.append("price", item.price);
    ItemDate.append("image", item.image);
    console.log(item)
   console.log(ItemDate)
    //console.log([...ItemDate])
    this.http.post<{ message: string, item: IItem }>(`${apiUrl}/item`, ItemDate)
      .subscribe((res) => {///api/item
        console.log("post")
        console.log(res)
        const resdish = res.item;
        //this.toastr.success('Added');
        this.items.push(resdish);
        console.log(this.items)
        //this.updateItemList();
      });
  }
  getItems() {
    return this.http.get(`http://localhost:3000/api/item/`)
  }
  updateItemList() {
    this.getItems().subscribe((items: IItem[]) => {
      this.items = items['Items'];
      console.log(this.items);
    });
  }
  deleteItem(item) {
    console.log(item)
    return this.http.delete(`http://localhost:3000/api/item/${item._id}`);
  }
  getItem(id){
    return this.http.get(`http://localhost:3000/api/item/${id}`);
  }



}
