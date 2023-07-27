import { Injectable } from '@angular/core';
import { Product } from '../admin/Components/products/product.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, map, of, pipe } from 'rxjs';
import { ProductService } from './product.service';
import { ImageProcessingService } from './image-processing.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveServiceService implements Resolve<Product> {

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> {
    const id = route.paramMap.get("productId");

    if (id) {
      return this.productService.getProductDetailsById(id)
        .pipe(
          map(p => this.imageProcessingService.createImages(p))
        );
    } else {
      return of(this.getDefaultProduct());
    }
  }

  getDefaultProduct(): Product {
    return {
      productId: null,
      productName: "",
      productDescription: "",
      categoryName:"",
      productDiscountedPrice: 0,
      productActualPrice: 0,
      productImages: []
    };
  }
}
