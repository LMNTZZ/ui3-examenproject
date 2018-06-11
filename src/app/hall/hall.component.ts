import {Component, Input, OnInit} from '@angular/core';
import {Hall} from "./hall.model";

@Component({
  selector: 'app-hall',
  templateUrl: './hall.component.html',
  styleUrls: ['./hall.component.css']
})
export class HallComponent implements OnInit {
  @Input() hall: Hall;
  hallDetails: Hall;

  constructor() { }

  ngOnInit() {
  }

  showDetails(hall: Hall) {
    if( this.hallDetails == null ) { this.hallDetails = hall; }
    else { this.hallDetails = null; }
  }

}
