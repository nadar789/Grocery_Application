import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrderComponent } from './Components/order/order.component';
import { AddNewProductDialogComponent } from './Components/products/add-new-product-dialog/add-new-product-dialog.component';
import { ProductResolveServiceService } from '../service/product-resolve-service.service';
import { AuthGuard } from '../auth_guard/auth.guard';
import { CategoryComponent } from './Components/category/category.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'category',
        component: CategoryComponent
      },
    ]

  },

  {
    path: 'addNewProductDialog',
    component: AddNewProductDialogComponent,
    resolve: {
      product: ProductResolveServiceService
    }
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
