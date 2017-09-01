import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Directive({
  selector: 'echart'
})
export class EchartOptionDirective1 implements OnInit {
  @Input() chartType: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    echarts.init(this.elementRef.nativeElement).setOption(this.chartType);
  }

}
