import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotelbooking',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './hotelbooking.component.html',
  styleUrl: './hotelbooking.component.css'
})
export class HotelbookingComponent {
  room:any;
  noroom:any;
  button:any;
  amount:any;
  noacamount:any;
  facilityavailable:any;
  facilityamount:any;
  finalpayment:any;
  constructor(private form:FormBuilder){

  }

  // @ViewChild('button') btn!:ElementRef;

  hotelform=this.form.group({
    room:['',Validators.required],
    number:['',Validators.required],
    person:['',Validators.required],
    children:['',Validators.required],
    restaurant:['',Validators.required]
  })

  submitForm(){
    console.log(this.hotelform.value);
  }

  selectRoom(room:any){
    this.room=room;
    console.log(room);
    this.calculateFee();
  }

  selectnoRoom(noroom:any){
    this.noroom=noroom;
    console.log(noroom);
    this.calculateFee();
  }

  facility(facility:any){
    this.facilityavailable=facility;
      this.facilityamount=1000;
      this.button=document.getElementById('button');
        this.button.innerText=this.finalpayment+this.facilityamount;
  }

  calculateFee(){
    if(this.room=="A/C room"){
      this.amount=500;
      if(this.noroom==1){
        this.button=document.getElementById('button');
        this.button.innerText=this.amount*this.noroom;
        this.finalpayment=this.amount*this.noroom;
      }
      else if(this.noroom==2){
        this.button=document.getElementById('button');
        this.button.innerText=this.amount*this.noroom;
        this.finalpayment=this.amount*this.noroom;
      }
    }

    else{
      this.noacamount=300;
      if(this.noroom==1){
        this.button=document.getElementById('button');
        this.button.innerText=this.noacamount*this.noroom;
        this.finalpayment=this.amount*this.noroom;
      }
      else if(this.noroom==2){
        this.button=document.getElementById('button');
        this.button.innerText=this.noacamount*this.noroom;
        this.finalpayment=this.amount*this.noroom;
      }
    }
  }
}
