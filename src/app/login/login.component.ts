import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styles: `
  
  .container-fluid{
    width:100%;
    height:100vh;
    background-image: url(https://img.freepik.com/free-vector/gradient-technology-cyber-background_23-2149112205.jpg?semt=ais_hybrid);
    background-position:center;
    background-size:cover;
    position:relative;
    
  }
  .login{
       width: 80%; 
       max-width: 450px;
       height:550px;
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%,-50%);
       background: white;
      padding: 50px 60px 70px;
      text-align: left;
      color:#151B8D;
      background-color:#FFF9E3;
      border:2px solid silver;
    }
    h4{
      color:#d98880;
      font-size:30px;
      font-weight:600px;
      text-align:center;
    }
    ::placeholder{
      font-weight:500px;
      color:#033E3E;
    }
  button{
    font-size:18px;
    width:120px;
    height:50px;
    align-items:center;
    text-align:center;
    margin-left:95px;
    border-radius:50px;
      }

    
  input{
    width:100%;
    height:40px;
    font-size:17px;
    padding: 0 25px;
    margin-bottom:15px;
    border-radius:30px;
    border: 2px solid #6D7B8D;   
    box-shadow:0px 5px 10px 1px rgba(0,0,0,0.1);
    outline:none;
  }
  
  `
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
