import { Component, OnInit } from '@angular/core';

declare const AMap: any;

@Component({
  selector: 'app-amap',
  templateUrl: './amap.component.html',
  styleUrls: ['./amap.component.scss']
})
export class AmapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let map  = new AMap.Map('gaodemap-container');
    map.plugin('AMap.Geolocation', () => {
      let geolocation = new AMap.Geolocation({
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
        convert: true,
        showButton: true,
        buttonPosition: 'LB',
        buttonOffset: new AMap.Pixel(10, 20),
        showMarker: true,
        showCircle: true,
        panToLocation: true,
        zoomToAccuracy: true
      });
      map.addControl(geolocation);
    });
  }

}
