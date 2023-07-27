import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { mycategory } from 'src/app/model/category';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private productService: ProductService) { }
  displayedColumns: string[] = ['Id', 'Name', 'Action'];
  categoryDetails: mycategory[] = []


  category: mycategory = {
    categoryId: 0,
    categoryTitle: ''
  }
  ngOnInit(): void {
    this.getAllCategory()
  }

  public addNewCategory(categoryForm: NgForm) {
    this.productService.addCategory(categoryForm.value).subscribe(
      (response) => {

        categoryForm.reset()
        this.getAllCategory()
      },
      (error: HttpErrorResponse) => {
        console.log(error)
      }
    )
  }

  public getAllCategory() {
    this.productService.getAllCategories().subscribe(
      (response: Object) => {
        this.categoryDetails = response as mycategory[];
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }

  public deleteCategory(categoryId: number) {
    this.productService.deleteCategory(categoryId).subscribe(
      (response) => {
        this.getAllCategory()
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    )
  }



}
