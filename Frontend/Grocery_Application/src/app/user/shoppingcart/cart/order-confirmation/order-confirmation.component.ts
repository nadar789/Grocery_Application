import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(private router: Router) {

  }


  gotohomepage() {
    this.router.navigate([''])
  }
}
