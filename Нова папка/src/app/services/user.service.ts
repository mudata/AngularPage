import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor() { }

  login(data: any): Observable<any> {
    return;
  }

  logout(): Observable<any> {
    return;
  }


}
