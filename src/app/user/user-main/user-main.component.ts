import { Component, OnInit } from '@angular/core';
import { flyInOut } from '../../animations/fly-in-out';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.scss'],
  animations: [ flyInOut ]
})
export class UserMainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void
  {

  }

  public onActivate(component): void
  {
    console.log('组件加载完成 > ' + component);
  }

  public onDeactivate(component): void
  {
    console.log('组件已移除 > ' + component);
  }

  public doFollow()
  {
    alert('自己不能关注自己!');
  }

}
