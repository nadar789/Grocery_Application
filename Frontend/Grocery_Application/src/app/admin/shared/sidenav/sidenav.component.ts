import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/model/userDetails';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }
  UserDetails: User[] = []
  displayedColumns: string[] = ['User Name', 'First Name', 'Last Name', 'Role'];

  ngOnInit(): void {
    this.getAllUserDetails()
  }
  public getAllUserDetails() {
    this.productService.getAllUserDetails().subscribe(
      (response: any) => {
        this.UserDetails = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  isOnAdminRoute(): boolean {
    return this.router.url === '/admin';
  }



  list = [
    {
      number: 1,
      name: 'products',
      icon: 'fa-solid fa-box',
      route: 'products'
    },

    {
      number: 2,
      name: 'order',
      icon: 'fa-solid fa-cart-shopping',
      route: 'order'
    },

    {
      number: 3,
      name: 'category',
      icon: 'fa-solid fa-list',
      route: 'category'
    },

  ]


}
