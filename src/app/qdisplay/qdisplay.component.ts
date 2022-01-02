import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qdisplay',
  templateUrl: './qdisplay.component.html',
  styleUrls: ['./qdisplay.component.css']
})
export class QdisplayComponent implements OnInit {
 @Input() quotes:any;
 

  constructor() { }

  ngOnInit(): void {
  }
  

}
