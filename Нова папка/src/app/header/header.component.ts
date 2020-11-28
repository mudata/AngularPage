import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AuthService} from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public cartService: CartService,public authService: AuthService) { }

    
  ngOnInit(): void {
  }

}
