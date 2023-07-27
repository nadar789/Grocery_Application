import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateFilterFn } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';


import { Product } from 'src/app/admin/Components/products/product.model';
import { OrderDetails } from 'src/app/model/orderDetails';
import { User } from 'src/app/model/userDetails';
import { ProductService } from 'src/app/service/product.service';
import { UserService } from 'src/app/service/user.service';

declare var Razorpay: any

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  isSingleProductCheckout: boolean = false
  productDetails: Product[] = []
  UserDetails: User[] = []

  orderDetails: OrderDetails = {
    fullName: '',
    fullAddress: '',
    contactNumber: '',
    alternateContactNumber: '',
    date:'',
    transactionId: '',
    orderProductQuantityList: []
  }
  User: User = {
    userName: '',
    userFirstName: '',
    userLastName: '',
    userPassword: '',
    role: {
      roleName: '',
      roleDescription: ''
    }
  };
  currentDate!: Date;
 

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router,
              private userService: UserService,
              private datePipe: DatePipe

  ) {
    this.orderDetails = {
      fullName: '',
      fullAddress: '',
      contactNumber: '',
      alternateContactNumber: '',
      date: '', 
      transactionId: '',
      orderProductQuantityList: []
    };
  }
  ngOnInit(): void {
    this.currentDate = new Date();
    this.orderDetails.date = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd')!;

    this.productDetails = this.activatedRoute.snapshot.data['productDetails']
    this.isSingleProductCheckout = !!this.activatedRoute.snapshot.paramMap.get("isSingleProductCheckout")

    this.productDetails.forEach(
      x => this.orderDetails.orderProductQuantityList.push(
        { productId: x.productId, quantity: 1 }
      )
    )

    this.userService.getCurrentUser().subscribe(
      (user: User) => {
        this.User = user;
        this.orderDetails.fullName = user.userFirstName +' '+ user.userLastName; 
      },
      (error: any) => {
        console.log(error);
      }
    );

  }

  disableBeforeToday: DateFilterFn<Date | null> = (date: Date | null): boolean => {
    if (!date) return false; 
    const today = new Date();
    return date < today;
  };


  public placeOrder(orderForm: NgForm) {
    this.productService.placeOrder(this.orderDetails, this.isSingleProductCheckout).subscribe(
      (resp) => {
        console.log(resp);
        orderForm.reset()
        this.router.navigate(["/orderConfirmation"])
      },
      (err) => {
        console.log(err)
      }
    )
  }

  getQuantityForproduct(productId: any) {
    const filteredProduct = this.orderDetails.orderProductQuantityList.filter(
      (productQuantity) => productQuantity.productId === productId
    )
    return filteredProduct[0].quantity
  }

  getCalculatedTotal(productId: any, productDiscountedPrice: any) {
    const filteredProduct = this.orderDetails.orderProductQuantityList.filter(
      (productQuantity) => productQuantity.productId === productId
    )

    return filteredProduct[0].quantity * productDiscountedPrice
  }

  onQuantityChanged(quantity: any, productId: any) {
    this.orderDetails.orderProductQuantityList.filter(
      (orderProduct) => orderProduct.productId === productId
    )[0].quantity = quantity
  }

  getCalculatedGrantTotal() {
    let grandTotal = 0

    this.orderDetails.orderProductQuantityList.forEach(
      (productQuantity) => {
        const price = this.productDetails.filter(product => product.productId === productQuantity.productId)[0].productDiscountedPrice
        grandTotal = grandTotal + price * productQuantity.quantity
      }
    )
    return grandTotal
  }

  createTransactionAndPlaceOrder(orderForm: NgForm) {
    let amount = this.getCalculatedGrantTotal()
    this.productService.createTransaction(amount).subscribe(
      (resp) => {
        console.log(resp);
        this.openTransactionModal(resp, orderForm)
      },
      (err) => {
        console.log(err)
      }
    )
  }

  openTransactionModal(response: any, orderForm: NgForm) {
    var options = {
      order_id: response.orderId,
      key: response.key,
      amount: response.amount,
      currency: response.currency,
      name: 'Grocery Application',
      description: 'Payment for Grocery Shopping',
      image: 'https://cdn.pixabay.com/photo/2023/06/26/13/41/wolf-8089783_640.jpg',
      handler: (response: any) => {
        if (response != null && response.razorpay_payment_id != null) {
          this.processResponse(response, orderForm)
        } else {
          alert("Payment Failed")
        }

      },
      prefill: {
        name: 'GA',
        email: 'GA@GMAIL.COM',
        contact: '9865322356'
      },
      notes: {
        address: 'Online Grocery Shopping'
      },
      theme: {
        color: '#F37254'
      }
    }

    var razorPayObject = new Razorpay(options)
    razorPayObject.open()

  }

  processResponse(resp: any, orderForm: NgForm) {
    this.orderDetails.transactionId = resp.razorpay_payment_id
    this.placeOrder(orderForm)
  }



}

