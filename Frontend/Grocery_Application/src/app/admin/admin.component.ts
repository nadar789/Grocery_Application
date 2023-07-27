import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { User } from '../model/userDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
