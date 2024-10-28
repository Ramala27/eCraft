import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {



  email!: string;
  password!:string;

  constructor (private readonly toastr: ToastrService){

     console.log('LoginComponent');

  }


  onSubmit(){


    console.log('Form Is Submitted');
    console.log('Email:', this.email,'Password:', + this.password);
    
    this.toastr.success("Form Submitted")
    
    
const usersStr = localStorage.getItem("USERS");

// const users = usersStr != null ? JSON.parse(usersStr) : [];

let users = [];

if(usersStr){

  users = JSON.parse(usersStr);
  
}else {

  users = [];

}

const userExists = users.find((obj: any)=> obj.email == this.email && obj.password == this.password);

if(userExists != null){

this.toastr.success("Successfully LoggedIn");
localStorage.setItem("LOGGED_IN_USER", "true");
localStorage.setItem("EMAIL",this.email);



}

else{

this.toastr.error("Invalid LogIn Credentials");
window.location.href = "/home"
}

  }
  


}
