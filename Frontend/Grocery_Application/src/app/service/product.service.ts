import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../admin/Components/products/product.model';
import { OrderDetails } from '../model/orderDetails';
import { MyOrderDetails } from '../model/myOrder';
import { mycategory } from '../model/category';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getAllUserDetails(){
    return this.http.get("http://localhost:8080/getAllUserDetails")
  }

  public addProduct(product: FormData): Observable<Product> {
    return this.http.post<Product>("http://localhost:8080/addNewProduct", product);
  }

  public getAllProducts(searchKeyword:string = "") {
    return this.http.get<Product[]>("http://localhost:8080/getAllProducts?searchKey="+searchKeyword)
  }

  public deleteProduct(productId: number) {
    return this.http.delete("http://localhost:8080/deleteProductDetails/"+ productId)
  }

  public getProductDetailsById(productId: any) {
    return this.http.get<Product>("http://localhost:8080/getProductDetailsById/" + productId)

  }

  public getProductDetails(isSingleProductCheckout: any, productId: any){
    return this.http.get<Product[]>("http://localhost:8080/getProductDetails/"+isSingleProductCheckout+"/"+productId)
  }

  public placeOrder(orderDetails:OrderDetails, isCartCheckout:any){
    return this.http.post("http://localhost:8080/placeOrder/"+ isCartCheckout, orderDetails)
  }

  public addToCart(productId:any){
    return this.http.get("http://localhost:8080/addToCart/"+productId)
  }

  public getCartDetails(){
    return this.http.get("http://localhost:8080/getCartDetails");
  }

  public deleteCartItem(cartId:any){
    return this.http.delete("http://localhost:8080/deleteCartItem/"+cartId)
  }

  public getMyOrders(): Observable<MyOrderDetails[]> {
    return this.http.get<MyOrderDetails[]>("http://localhost:8080/getOrderDetails")
  }

  public getAllOrderDetailsAdmin(status: string) : Observable<MyOrderDetails[]>{
    return this.http.get<MyOrderDetails[]>("http://localhost:8080/getAllOrderDetails/"+status)
  }

  public markAsDelivered(orderId:any){
   return this.http.get("http://localhost:8080/markOrderAsDelivered/"+orderId)
  }


  public createTransaction(amount:any){
    return this.http.get("http://localhost:8080/createTransaction/"+amount)
  }

  public addCategory(category:mycategory){
    return this.http.post("http://localhost:8080/addCategory",category)
  }

  public getAllCategories(){
    return this.http.get<mycategory[]>("http://localhost:8080/getAllCategories")
  }

  public deleteCategory(categoryId: number) {
    return this.http.delete("http://localhost:8080/deleteCategory/"+ categoryId)
  }
  

}