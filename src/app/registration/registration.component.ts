import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { FormControl,FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Response, response } from 'express';
import { error } from 'console';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit{
  registrationForm!: FormGroup;
  userData: any=[];

  constructor(private httpClient: HttpClient,private router: Router) {}
  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''), 
      dob: new FormControl(''),
      gender: new FormControl(''),
      password: new FormControl(''),
    });
  }

  // show data
  showData() {
    this.httpClient.get('http://localhost:3001/registrationForm').subscribe(
      (response)=>{
        this.userData = response;
        console.log(this.userData);
        });
  }

  updateData(value:string){
    this.router.navigate(['update',value]);
  }

  // delete data
  deleteData(value:string) {
    this.httpClient.post('http://localhost:3001/registrationFormDelete',{value}).subscribe(
      (response)=>{
        console.log(response);
      })
  }
  
  //register form 
  registerForm() {
    let data = this.registrationForm.value;
    console.log(data);
    this.httpClient.post('http://localhost:3001/registrationForm',data).subscribe(
      (response)=>{
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}


