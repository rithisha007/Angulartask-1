import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-flightbooking',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './flightbooking.component.html',
  styleUrl: './flightbooking.component.css'
})
export class FlightbookingComponent {
  room:any;
  noroom:any;
  button:any;
  amount:any;
  noacamount:any;
  facilityavailable:any;
  facilityamount:any;
  finalpayment:any;
  noofseats:any;
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

  person(selected:any){
    this.noofseats=selected;
    this.calculateFee();
  }

  facility(facility:any){
    this.facilityavailable=facility;
      this.facilityamount=1000;
      this.button=document.getElementById('button');
        this.button.innerText=this.finalpayment+this.facilityamount;
  }

  calculateFee(){
    if(this.room=="Economy Class"){
      this.amount=2500;
      if(this.noroom=="Window"){
        if(this.noofseats==1){
          this.button=document.getElementById('button');
          this.button.innerText=this.amount*this.noofseats;
          this.finalpayment=this.amount*this.noofseats;
        }
        else if(this.noofseats==2){
          this.button=document.getElementById('button');
          this.button.innerText=this.amount*this.noofseats;
          this.finalpayment=this.amount*this.noofseats;
        }
      }
      else if(this.noroom=="Aisle"){
        this.amount=1500;
        if(this.noofseats==1){
          this.button=document.getElementById('button');
          this.button.innerText=this.amount*this.noofseats;
          this.finalpayment=this.amount*this.noofseats;
        }
        else if(this.noofseats==2){
          this.button=document.getElementById('button');
          this.button.innerText=this.amount*this.noofseats;
          this.finalpayment=this.amount*this.noofseats;
        }
      }
    }

    else if(this.room=="Business Class"){
      this.noacamount=3000;
      if(this.noroom=="Window"){
        if(this.noofseats==1){
          this.button=document.getElementById('button');
          this.button.innerText=this.noacamount*this.noofseats;
          this.finalpayment=this.noacamount*this.noofseats;
        }
        else if(this.noofseats==2){
          this.button=document.getElementById('button');
          this.button.innerText=this.noacamount*this.noofseats;
          this.finalpayment=this.noacamount*this.noofseats;
        }
      }
      else if(this.noroom=="Aisle"){
        this.noacamount=2500;
        if(this.noofseats==1){
          this.button=document.getElementById('button');
          this.button.innerText=this.noacamount*this.noofseats;
          this.finalpayment=this.noacamount*this.noofseats;
        }
        else if(this.noofseats==2){
          this.button=document.getElementById('button');
          this.button.innerText=this.noacamount*this.noofseats;
          this.finalpayment=this.noacamount*this.noofseats;
        }
      }
    }
  }
}
