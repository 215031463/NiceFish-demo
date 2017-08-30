import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { flyInOut } from '../../animations/fly-in-out';
import { UserLoginService } from '../../user/user-login/user-login.service';
import { UserInfoComponent } from '../../user/user-info/user-info.component';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-detail-main',
  templateUrl: './post-detail-main.component.html',
  styleUrls: ['./post-detail-main.component.scss'],
  animations: [ flyInOut ]
})
export class PostDetailMainComponent implements OnInit, OnDestroy {
  public subscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userLoginService: UserLoginService
  ) { }

  ngOnInit() {
    this.subscription = this.userLoginService.currentUser
      .subscribe(
      data => {
        console.log('currentUser', data);
        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activatedRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        console.log(activatedRouteSnapshot);
        console.log(routerState);
        console.log(routerStateSnapshot);

        if (routerStateSnapshot.url.indexOf('/login') !== -1) {
          alert('登录成功...');
        }
      },
      err => {
        console.error(err);
      }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public doFollow(): void {
    window.alert('父组件监听子组件的事件...');
  }

}
