import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { MyOrderDetails } from 'src/app/model/myOrder';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
  providers: [DatePipe]
})
export class OrderComponent implements OnInit,AfterViewInit  {
  displayedColumns: string[] = ['ID','Product Name','First Name','Last Name','Address','Contact No','Status','Date','Action'];
  dataSource: MyOrderDetails[] = [];
  status: string = 'All'
  filteredDataSource: MyOrderDetails[] = [];

  @ViewChild('picker', { static: false }) picker!: ElementRef;
  @ViewChild('startDateInput', { static: false }) startDateInput!: ElementRef;
  @ViewChild('endDateInput', { static: false }) endDateInput!: ElementRef;


  constructor(private productService: ProductService,
              private datePipe: DatePipe) { }
  ngAfterViewInit(): void {
    this.filterByDateRange();
  }

  ngOnInit(): void {
    this.getAllOrderDetailsAdmin(this.status)
  }


  getAllOrderDetailsAdmin(statusParameter: string) {
    this.productService.getAllOrderDetailsAdmin(statusParameter).subscribe(
      (resp: MyOrderDetails[]) => {
        this.dataSource = resp;
        this.filteredDataSource = resp;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  markAsDelivered(orderId: any) {
    this.productService.markAsDelivered(orderId).subscribe(
      (resp) => {
        this.getAllOrderDetailsAdmin(this.status)

      },
      (err) => {
        console.log(err);
      }
    )

  }

  filterByDateRange() {
    const startDate = new Date(this.startDateInput.nativeElement.value);
    const endDate = new Date(this.endDateInput.nativeElement.value);
  
 
    if (startDate && endDate) {
      this.filteredDataSource = this.dataSource.filter((element) => {
        const orderDate = new Date(element.orderDate);
        return orderDate >= startDate && orderDate <= endDate;
      });
    } else {
      
      this.filteredDataSource = this.dataSource;
    }
  }
}
