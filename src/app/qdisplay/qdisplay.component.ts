import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qdisplay',
  templateUrl: './qdisplay.component.html',
  styleUrls: ['./qdisplay.component.css']
})
export class QdisplayComponent implements OnInit {
 @Input() quotes:any;

 onDelete(deleteMe:any){
  this.quotes.splice(deleteMe,1);
 }
 

  constructor() { }

  ngOnInit(): void {
  }
  

}
