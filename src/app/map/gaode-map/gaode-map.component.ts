import { Component, OnInit } from '@angular/core';

import { AmapComponent } from './amap/amap.component';
import { flyInOut } from '../../animations/fly-in-out';

@Component({
  selector: 'app-gaode-map',
  templateUrl: './gaode-map.component.html',
  styleUrls: ['./gaode-map.component.scss'],
  animations: [ flyInOut ]
})
export class GaodeMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
