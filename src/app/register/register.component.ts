import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styles: `
  
  .container-fluid{
    width:100%;
    height:125vh;
    background-position:center;
    background-size:cover;
    position:relative;
    background-image:url(https://img.freepik.com/free-vector/overlapping-forms-background-design_52683-44629.jpg?t=st=1732183394~exp=1732186994~hmac=9941bb1e3ea18f016db01a27980b30b89e045b494878b1d2566904e003ca7525&w=740);
  }
  form{
    width: 80%; 
       max-width: 450px;
       height:610px;
       position: absolute;
       top: 45%;
       left: 50%;
       transform: translate(-50%,-50%);
       background-color: snow;
      padding: 50px 60px 70px;
      text-align: left;
      color:#E1AD01;
      border:2px solid #B83C08;
      
  }
  h4{
    font-size:25px;
    text-align:center;
    color:#810541;
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

  `
})
export class RegisterComponent implements OnInit {

  regForm!: FormGroup;


  constructor(private toastr: ToastrService, private fb: FormBuilder) {

    console.log('RegisterComponent Construtor Called');

  }

  ngOnInit(): void {

    this.regForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.minLength(8), Validators.maxLength(12)]]
    });

  }

  get name() {
    return this.regForm.controls["name"];
  }

  get email() {
    return this.regForm.controls["email"];
  }

  get password() {
    return this.regForm.controls["password"]
  }

  onSubmit() {

    console.log('Form Is Submitted');
    console.log("valid", this.regForm.valid);
    console.log("value", this.regForm.value);

    if (this.regForm.invalid) {

      this.toastr.error("Please Fill Required Details")

    } else {
      const userobj = this.regForm.value;
      console.log('UserObj:', userobj);
      this.toastr.success("Successfully Registered")
      window.location.href = "/login";
    }
  }


}
