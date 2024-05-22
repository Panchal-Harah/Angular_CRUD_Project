import { Component,OnInit } from '@angular/core';
import { HttpClient,HttpClientModule,provideHttpClient } from '@angular/common/http';
import { Router,ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit{
  constructor(private httpClient:HttpClient, private router:Router, private activatedRoute:ActivatedRoute){}
  updateForm!:FormGroup;

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl(''),
      password: new FormControl(''),
    })
  }

  updateUser(){
    let data = this.updateForm.value;
    console.log(data,"data to update");
    let userId = this.activatedRoute.snapshot.paramMap.get('userid')
    data.userId = userId
    this.httpClient.post('http://localhost:3001/registrationFormUpdate',data).subscribe(
      (response)=>{
        console.log(response);
      },(error)=>{
        console.log(error);
      })
    }
}
