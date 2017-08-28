import { Component, OnInit, OnChanges, SimpleChanges, SimpleChange, Input, Output, EventEmitter } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../model/user-model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit, OnChanges {
  @Input() panelTitle: string;
  @Input() userId: string;
  @Output() follow: EventEmitter<string> = new EventEmitter();

  public currentUser: User;
  public userInfoURL = 'user/getUserInfo';

  constructor(private http: Http) { }

  ngOnChanges(changes: SimpleChanges): void {
    Object.keys(changes).forEach((key: string) => {
      let inputValue: SimpleChange = changes[key];
      let prevVal = inputValue.previousValue;
      let currentVal = inputValue.currentValue;
      let isFirstChange = inputValue.firstChange;
      console.log(isFirstChange === inputValue.isFirstChange());
      console.log('第一次变化 -> ' + isFirstChange);
      console.log(`changes钩子前 ${key} 的值为 ${prevVal}`);
      console.log(`changes钩子后 ${key} 的值为 ${currentVal}`);
    });
  }

  ngOnInit(): void {
    console.log('onInit -> ' + this.panelTitle);
  }

  public loadUserInfo(): void {
    this.userInfoURL = this.userInfoURL + '/' + this.userId;
    this.http.get(this.userInfoURL)
      .map((res: Response) => res.json())
      .subscribe(
      data => console.log('用户信息' + data),
      err => console.error(err)
      );
  }

  public followBtnClick(): void {
    this.follow.emit('follow');
  }

}
