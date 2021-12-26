import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qdisplay',
  templateUrl: './qdisplay.component.html',
  styleUrls: ['./qdisplay.component.css']
})
export class QdisplayComponent implements OnInit {
 input= document.getElementById("quote")!as HTMLElement;
 

  constructor() { }

  ngOnInit(): void {
  }
  

}
