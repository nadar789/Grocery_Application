import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/admin/Components/products/product.model';
import { mycategory } from 'src/app/model/category';
import { ImageProcessingService } from 'src/app/service/image-processing.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //pageNumber: number = 0
  productDetails: Product[] = [];
  categoryDetails:mycategory[] = []
  filteredProductDetails: Product[] = [];
  selectedCategory: string = '';

  constructor(private productService: ProductService,
    private imageProcessingService: ImageProcessingService,
    private router: Router) {
      this.productService.getAllCategories().subscribe(
        (categoryDetails: mycategory[]) => {
          this.categoryDetails = categoryDetails;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      )
     }

  ngOnInit(): void {
    this.getAllProducts();
    
  }

  
  public getAllProducts(searchKey: string = "") {
    if (searchKey === "") {
      searchKey = "";
    }
    this.productService.getAllProducts(searchKey)
      .pipe(
        map((x: Product[], i) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
      )
      .subscribe(
        (response: Product[]) => {
          this.productDetails = response;
          this.filteredProductDetails = response;
        },
        (error: HttpErrorResponse) => {
        }
      );
  }

  showProductDetails(productId: any) {
    this.router.navigate(['/productViewDetails', { productId: productId }])
  }

  public onSearch(searchKeyword: string) {
    this.getAllProducts(searchKeyword);
  }

  addToCart(productId: any) {
    
      this.productService.addToCart(productId).subscribe(
        (resp) => {
          alert("Product added Successfully")
        },
        (err) => {
          console.log(err)
        }
  
      )
  }
  filterByCategory(categoryName: string) {
    this.selectedCategory = categoryName;
    if (categoryName === '') {
      this.filteredProductDetails = this.productDetails;
    } else {
      this.filteredProductDetails = this.productDetails.filter(product => product.categoryName === categoryName);
    }
  }

}
