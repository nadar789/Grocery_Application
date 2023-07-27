import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ProductViewComponent } from './shoppingcart/product-view/product-view.component';
import { ProductListComponent } from './shoppingcart/product-list/product-list.component';
import { ProductResolveServiceService } from '../service/product-resolve-service.service';
import { LoginComponent } from '../authentication/login/login.component';
import { RegistrationComponent } from '../authentication/registration/registration.component';
import { AuthGuard } from '../auth_guard/auth.guard';
import { BuyProductComponent } from './shoppingcart/cart/buy-product/buy-product.component';
import { BuyProductResolverService } from '../service/buy-product-resolver.service';
import { OrderConfirmationComponent } from './shoppingcart/cart/order-confirmation/order-confirmation.component';
import { CartComponent } from './shoppingcart/cart/cart/cart.component';
import { MyOrdersComponent } from './shoppingcart/cart/my-orders/my-orders.component';

const routes: Routes = [

  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        component: ShoppingcartComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registration',
        component: RegistrationComponent
      },
      {
        path: 'productViewDetails',
        component: ProductViewComponent,
        resolve: {
          product: ProductResolveServiceService
        }
      },
      {
        path: 'buyProduct',
        component: BuyProductComponent,
        resolve: {
          productDetails: BuyProductResolverService
        }
      },
      {
        path: 'orderConfirmation',
        component: OrderConfirmationComponent,
        
      },
      {
        path: 'cart',
        component: CartComponent,  
      },
      {
        path: 'myOrders',
        component: MyOrdersComponent,  
      }
    ]
  },
  {
    path: 'productList',
    component: ProductListComponent
  },
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
