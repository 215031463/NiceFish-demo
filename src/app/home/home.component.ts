import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../animations/fly-in-out';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ flyInOut ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
