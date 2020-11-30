import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService} from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lo:{}
  constructor(public cartService: CartService,public authService: AuthService) { }
  
    
  ngOnInit(): void {
    console.log(this.authService)
//     this.lo=localStorage.getItem("email");
// console.log(this.lo)
  }

}
