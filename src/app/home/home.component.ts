import { Component, OnInit } from '@angular/core';
import {Incident} from './incident';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
incident: Incident= new Incident;
  ngOnInit() {
  }
  Saveincident()
  {
console.log(this.incident);
  }
}
