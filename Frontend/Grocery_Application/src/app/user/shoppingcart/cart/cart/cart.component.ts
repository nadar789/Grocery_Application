import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/admin/Components/products/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private productService : ProductService,
              private router: Router,){}

  displayedColumns: string[] = ['Name','Description' , 'Discounted Price', 'Actual Price', 'Actions'];

  cartDetails:any = []
  ngOnInit(): void {
  this.getCartDetails()
  }

  getCartDetails(){
    this.productService.getCartDetails().subscribe(
      (resp : any) =>{
        this.cartDetails = resp
      },
      (err) =>{
        console.log(err)
      }
    )
  }

  checkout(){
    const navigationExtras: NavigationExtras = {
      queryParams: {
        isSingleProductCheckout: false,
        id: 0
      }
    };

    this.router.navigate(['/buyProduct'], navigationExtras);
  }

  deleteProduct(cartId:any){
   this.productService.deleteCartItem(cartId).subscribe(
    (resp) =>{
      console.log(resp)
      this.getCartDetails()
    },
    (err) =>{
      console.log(err)
    }
   )
  }

}
