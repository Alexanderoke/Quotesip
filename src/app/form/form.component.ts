import { Quote } from '@angular/compiler';
import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  Quote="Enter Quote"
  quote:any=[];
  

  postQuote(val:any){
    if(val.length>0){
    this.quote.push(val);
    val.value='';
  }
    
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }
  
     
  }
