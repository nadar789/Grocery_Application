import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.forUser()
  }

  forUser() {
    this.userService.forUser().subscribe(
      (response: any) => {
      },
      (error: any) => {
        //console.log(error)
      }
    )
  }
}
