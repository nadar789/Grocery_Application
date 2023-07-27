import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userheader',
  templateUrl: './userheader.component.html',
  styleUrls: ['./userheader.component.css']
})
export class UserheaderComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private userAuthService : UserAuthService,
              private userService :UserService,
              private router :Router){}

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn()
  }

  public logout(){
    this.userAuthService.clear()
    this.router.navigate([''])
  }


}
