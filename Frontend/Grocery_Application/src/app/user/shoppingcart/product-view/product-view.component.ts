import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/admin/Components/products/product.model';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  selectedProductIndex = 0
  product!: Product

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }


  ngOnInit(): void {
    this.product = this.activatedRoute.snapshot.data['product']
  }

  changeIndex(index: any) {
    this.selectedProductIndex = index

  }

  buyProduct(productId: any) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        isSingleProductCheckout: true,
        id: productId
      }
    };

    this.router.navigate(['/buyProduct'], navigationExtras);
  }

  addToCart(productId: any) {
    this.productService.addToCart(productId).subscribe(
      (resp) => {
        // console.log(resp)
        alert("Product added Successfully")
      },
      (err) => {
        console.log(err)
      }

    )
  }
}
