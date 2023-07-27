import { Injectable } from '@angular/core';
import { Product } from '../admin/Components/products/product.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, map } from 'rxjs';
import { ProductService } from './product.service';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class BuyProductResolverService implements Resolve<Product[]> {

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService) { }

  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {

  //   const id = route.paramMap.get("id")
  //   const isSingleProductCheckout = route.paramMap.get("isSingleProductCheckout")
  //   return this.productService.getProductDetails(isSingleProductCheckout, id)
  //     .pipe(
  //       map(
  //         (x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product))
  //       )
  //     )
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
    const id = route.queryParams['id'];
    const isSingleProductCheckout = route.queryParams['isSingleProductCheckout'];
    return this.productService.getProductDetails(isSingleProductCheckout, id).pipe(
      map((products: Product[]) => {
        return products.map((product: Product) => this.imageProcessingService.createImages(product));
      })
    );
  }
  

}
