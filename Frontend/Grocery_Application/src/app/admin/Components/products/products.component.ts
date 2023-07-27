import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ProductService } from 'src/app/service/product.service';
import { Product } from './product.model';
import { ImageProcessingService } from 'src/app/service/image-processing.service';
import { AddNewProductDialogComponent } from './add-new-product-dialog/add-new-product-dialog.component';
import { ShowProductImagesDialogComponent } from './show-product-images-dialog/show-product-images-dialog.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productDetails: Product[] = [];
  displayedColumns: string[] = ['Id', 'Product Name', 'Description','Category', 'Product Discounted Price', 'Product Actual Price', 'Actions'];

  constructor(
    private productService: ProductService,
    private imageProcessingService: ImageProcessingService,
    private router: Router,
    public productDialog: MatDialog,
    public imagesDialog: MatDialog
  ) { }


  ngOnInit(): void {
    this.getAllProducts();
  }

  addProduct() {
    this.productDialog.open(AddNewProductDialogComponent)
  }

  getAllProducts() {
    this.productService.getAllProducts()
      .pipe(
        map((x: Product[]) => x.map((product: Product) => this.imageProcessingService.createImages(product)))
      )
      .subscribe(
        (response: Product[]) => {
          this.productDetails = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
  }


  deleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe(
      (response) => {
        console.log(response)
        this.getAllProducts()
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  showImages(product: Product) {
    this.imagesDialog.open(ShowProductImagesDialogComponent, {
      data: {
        images: product.productImages
      },
      height: '500px',
      width: '800px',
    });
  }

  editProduct(productId: number) {
    const dialogRef = this.productDialog.open(AddNewProductDialogComponent, {
      data: productId
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllProducts();
      }
    });
  }

}
