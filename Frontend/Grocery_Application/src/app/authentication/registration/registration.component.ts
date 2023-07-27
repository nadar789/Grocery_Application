import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private userService:UserService,
             private router:Router){}

  ngOnInit(): void {
  }

  register(registerForm:NgForm){
    console.log(registerForm.value)
    this.userService.register(registerForm.value).subscribe(
      (resp) =>{
        console.log(resp)
        registerForm.reset();
        window.alert('Registration completed!');
        this.router.navigate(["/login"])
      },
      (err) =>{
        console.log(err)
      }
    )
  }

}
