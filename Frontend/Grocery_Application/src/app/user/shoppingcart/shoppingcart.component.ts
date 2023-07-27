import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  isLoggedIn: any;

  constructor(private userAuthService: UserAuthService,
              private router:Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.userAuthService.isLoggedIn();
  }
}
