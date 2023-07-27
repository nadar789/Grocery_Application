import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DatePipe } from '@angular/common';


import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { NavigationComponent } from './user/shared/navigation/navigation.component';
import { UserheaderComponent } from './user/shared/userheader/userheader.component';
import { FooterComponent } from './user/shared/footer/footer.component';
import { ShoppingcartComponent } from './user/shoppingcart/shoppingcart.component';
import { CarouselComponent } from './user/shoppingcart/carousel/carousel.component';
import { BannerComponent } from './user/shoppingcart/Banners/banner/banner.component';
import { BannerOneComponent } from './user/shoppingcart/Banners/banner-one/banner-one.component';
import { BannerTwoComponent } from './user/shoppingcart/Banners/banner-two/banner-two.component';
import { BannerThreeComponent } from './user/shoppingcart/Banners/banner-three/banner-three.component';
import { BannerFourComponent } from './user/shoppingcart/Banners/banner-four/banner-four.component';
import { BannerFiveComponent } from './user/shoppingcart/Banners/banner-five/banner-five.component';
import { AdminheaderComponent } from './admin/shared/adminheader/adminheader.component';
import { SidenavComponent } from './admin/shared/sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './admin/Components/products/products.component';
import { OrderComponent } from './admin/Components/order/order.component';
import { AddNewProductDialogComponent } from './admin/Components/products/add-new-product-dialog/add-new-product-dialog.component';
import { ShowProductImagesDialogComponent } from './admin/Components/products/show-product-images-dialog/show-product-images-dialog.component';
import { ProductListComponent } from './user/shoppingcart/product-list/product-list.component';
import { ProductViewComponent } from './user/shoppingcart/product-view/product-view.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AuthGuard } from './auth_guard/auth.guard';
import { AuthInterceptor } from './auth_guard/auth.interceptor';
import { UserService } from './service/user.service';
import { BuyProductComponent } from './user/shoppingcart/cart/buy-product/buy-product.component';
import { OrderConfirmationComponent } from './user/shoppingcart/cart/order-confirmation/order-confirmation.component';
import { CartComponent } from './user/shoppingcart/cart/cart/cart.component';
import { MyOrdersComponent } from './user/shoppingcart/cart/my-orders/my-orders.component';
import { CategoryComponent } from './admin/Components/category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    NavigationComponent,
    UserheaderComponent,
    FooterComponent,
    ShoppingcartComponent,
    CarouselComponent,
    BannerComponent,
    BannerOneComponent,
    BannerTwoComponent,
    BannerThreeComponent,
    BannerFourComponent,
    BannerFiveComponent,
    AdminheaderComponent,
    SidenavComponent,
    OrderComponent,
    AddNewProductDialogComponent,
    ProductsComponent,
    ShowProductImagesDialogComponent,
    ProductListComponent,
    ProductViewComponent,
    LoginComponent,
    RegistrationComponent,
    BuyProductComponent,
    OrderConfirmationComponent,
    CartComponent,
    MyOrdersComponent,
    CategoryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserRoutingModule,
    AdminRoutingModule,
    CarouselModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatGridListModule,
    MatInputModule,
    RouterModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true,
    },
    UserService,
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
