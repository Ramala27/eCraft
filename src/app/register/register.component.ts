import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styles: ``
})
export class RegisterComponent implements OnInit {

  regForm! : FormGroup;
  

  constructor (private toastr:ToastrService, private fb: FormBuilder ){

  console.log('RegisterComponent Construtor Called');

  }

  ngOnInit(): void {
    
    this.regForm = this.fb.group({
    name:['',[Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.minLength(8),Validators.maxLength(12)]]
    });

    }

    get name(){
      return this.regForm.controls["name"];
    }

    get email(){
      return this.regForm.controls["email"];
    }

    get password(){
      return this.regForm.controls["password"]
    }

onSubmit(){

  console.log('Form Is Submitted');
  console.log("valid",this.regForm.valid);
  console.log("value",this.regForm.value);
  
  if(this.regForm.invalid){

     this.toastr.error("Please Fill Required Details")

  }else{
    const userobj = this.regForm.value;
    console.log('UserObj:', userobj);
    this.toastr.success("Successfully Registered")
    window.location.href="/login";
  }
}


}
