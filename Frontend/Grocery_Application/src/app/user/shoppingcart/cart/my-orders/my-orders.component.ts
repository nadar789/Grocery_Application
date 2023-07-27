import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MyOrderDetails } from 'src/app/model/myOrder';
import { ProductService } from 'src/app/service/product.service';


@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css'],
})
export class MyOrdersComponent implements OnInit  {
  displayedColumns: string[] = ['Name', 'Address', 'Contact No', 'Amount','Status'];

  myOrderDetails: MyOrderDetails[] =[]




  constructor(private productService:ProductService){}


  ngOnInit(): void {
    this.getOrderDetails()
  }

  getOrderDetails(){
   this.productService.getMyOrders().subscribe(
    (resp:MyOrderDetails[]) =>{
      this.myOrderDetails = resp
    },(err)=>{
      console.log(err)
    }
   )
  }

}
