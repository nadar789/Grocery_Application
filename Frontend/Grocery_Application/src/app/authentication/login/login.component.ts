import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(
    private userService: UserService,
    private userAuthService: UserAuthService,
    private router: Router
  ) {}

  login(loginForm: NgForm) {
    this.userService.login(loginForm.value).subscribe(
      (response: any) => {
        this.userAuthService.setRoles(response.user.role);
        this.userAuthService.setToken(response.jwtToken);
        const role = response.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
