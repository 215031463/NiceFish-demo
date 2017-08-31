import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from '../model/user-model';

@Injectable()
export class UserRegisterService {
  private userRegisterURL = 'mock-data/user-register-mock.json';
  private testEmailURL = '';
  public subject: Subject<User> = new Subject<User>();

  constructor(private http: Http) { }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  public register(user: User): Observable<void> {
    console.log(user);

    //  向后台post数据的写法
    // let data = new URLSearchParams();
    // data.append('email', user.email);
    // data.append('password', user.password);
    // return this.http.post(this.userRegisterURL, data);

    return this.http.get(this.userRegisterURL)
      .map((res: Response) => {
        let user = res.json();
        localStorage.setItem('currentUser', user);
        this.subject.next(user);
      });
  }

  public testEmail(email: string): Observable<any> {
    return this.http.get(this.testEmailURL)
      .map((res: Response) => res.json());
  }

}
