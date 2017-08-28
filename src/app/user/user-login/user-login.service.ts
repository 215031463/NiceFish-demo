import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { User } from '../model/user-model';

@Injectable()
export class UserLoginService {
  private userLoginURL = 'mock-data/user-login-mock.json';
  public subject: Subject<User> = new Subject();

  constructor(private http: Http) { }

  public get currentUser(): Observable<User> {
    return this.subject.asObservable();
  }

  public login(user: User) {
    return this.http.get(this.userLoginURL)
      .map((res: Response) => {
        let user = res.json();
        console.log('user object > ', JSON.stringify(user, undefined, 2));
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.subject.next(Object.assign({}, user));
        }
        return user;
      })
      .subscribe(
      data => console.log('login success...'),
      err => console.error(err)
      );
  }

  public logout(): void {
    localStorage.removeItem('currentUser');
    this.subject.next(Object.assign({}));
  }

}
