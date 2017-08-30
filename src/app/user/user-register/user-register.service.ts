import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user-model';

@Injectable()
export class UserRegisterService {
  public currentUser: Observable<User>;
  constructor() { }

}
