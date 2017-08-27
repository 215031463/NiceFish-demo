import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-sitestat',
  templateUrl: './sitestat.component.html',
  styleUrls: ['./sitestat.component.scss']
})
export class SitestatComponent implements OnInit, OnDestroy {
  private timer: any;
  public currentTime: Date;

  constructor() { }

  ngOnInit() {
    this.currentTime = new Date();
    this.timer = window.setInterval(() => this.currentTime = new Date(), 1000);
  }

  ngOnDestroy(): void {
    window.clearInterval(this.timer);
    this.timer = null;
  }

}
