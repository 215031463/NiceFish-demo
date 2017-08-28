import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterState,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { User } from '../model/user-model';
import { UserLoginService } from './user-login.service';
import { fadeInOut } from '../../animations/fade-in-out';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  animations: [ fadeInOut ]
})
export class UserLoginComponent implements OnInit {
  public user: User = new User();
  public error: Error;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private routerState: RouterState,
    private userLoginService: UserLoginService
  ) { }

  ngOnInit() {
    console.group('--- user login component ---');
    console.log(this.router);
    console.log(this.activatedRoute);

    let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
    let routerStateSnapshot: RouterStateSnapshot = this.routerState.snapshot;
    console.log(routerStateSnapshot === this.router.routerState.snapshot);

    console.log(activatedRouteSnapshot);
    console.log(routerStateSnapshot);
    console.log(this.router.routerState);

    console.groupEnd();
  }

  public doLogin(): void {
    console.log(this.user);
    this.userLoginService.login(this.user);
  }

  public doLogout(): void {
    this.userLoginService.logout();
    this.router.navigateByUrl('/home');
  }

  public forgetPwd(): void {
    this.router.navigateByUrl('/forgetpwd');
  }

}
