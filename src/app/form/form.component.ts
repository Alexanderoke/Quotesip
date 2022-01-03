import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public date= new Date()
  quote:any=[""];

  constructor() { }

  ngOnInit(): void {
  }
  postQuote(val:any){

    this.quote=val;
  }
     
  }
