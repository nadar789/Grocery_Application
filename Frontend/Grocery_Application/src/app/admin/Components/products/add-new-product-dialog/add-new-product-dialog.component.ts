import { Component, Inject, OnInit } from '@angular/core';
import { Product, fileHandle } from '../product.model';
import { FormControl, NgForm } from '@angular/forms';
import { ProductService } from 'src/app/service/product.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { mycategory } from 'src/app/model/category';
import { Observable, map, startWith } from 'rxjs';



@Component({
  selector: 'app-add-new-product-dialog',
  templateUrl: './add-new-product-dialog.component.html',
  styleUrls: ['./add-new-product-dialog.component.css']
})
export class AddNewProductDialogComponent implements OnInit {
  myControl = new FormControl<string | mycategory>('');
  categoryDetails: mycategory[] = []
  filteredOptions!: Observable<mycategory[]>;


  product: Product = {
    productId: null,
    productName: "",
    productDescription: "",
    categoryName: "",
    productDiscountedPrice: 0,
    productActualPrice: 0,
    productImages: []
  }

  constructor(private productService: ProductService,
    private sanatizer: DomSanitizer,
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
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
    const productId = this.data;
    if (productId) {
      this.productService.getProductDetailsById(productId).subscribe(
        (response: Product) => {
          this.product = response;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        }
      );
    }

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.categoryTitle;
        return name ? this._filter(name as string) : this.categoryDetails.slice();
      }),
    );

  }

  private _filter(name: string): mycategory[] {
    const filterValue = name.toLowerCase();

    return this.categoryDetails.filter(option => option.categoryTitle.toLowerCase().includes(filterValue));
  }



  addProduct(productForm: NgForm) {

    const FormData = this.prepareFormData(this.product)
    this.productService.addProduct(FormData).subscribe(
      (response: Product) => {
        productForm.reset()
        this.product.productImages = []
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
    )
  }

  prepareFormData(product: Product): FormData {
    const formData = new FormData()

    formData.append(
      'product',
      new Blob([JSON.stringify(product)], { type: 'application/json' })
    )
    for (var i = 0; i < product.productImages.length; i++) {
      formData.append(
        'ImageFile',
        product.productImages[i].file,
        product.productImages[i].file.name
      )
    }
    return formData

  }

  onFileSelected(event: Event) {

    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      const file = inputElement.files[0];

      const fileHandle: fileHandle = {
        file: file,
        url: this.sanatizer.bypassSecurityTrustUrl(
          window.URL.createObjectURL(file)
        )
      }
      this.product.productImages.push(fileHandle)

    }
  }

  removeImages(i: number) {
    this.product.productImages.splice(i, 1)
  }

}

