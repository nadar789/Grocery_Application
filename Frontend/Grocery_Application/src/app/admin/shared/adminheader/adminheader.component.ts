import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-adminheader',
  templateUrl: './adminheader.component.html',
  styleUrls: ['./adminheader.component.css']
})
export class AdminheaderComponent implements OnInit {

  constructor(private userAuthService: UserAuthService,
    private router: Router) { }


  ngOnInit(): void {
  }


  public logout() {
    this.userAuthService.clear()
    this.router.navigate([''])
  }

}
