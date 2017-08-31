import { Component, HostListener, ElementRef, Renderer, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterState, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { UserLoginService } from './user/user-login/user-login.service';
import { UserRegisterService } from './user/user-register/user-register.service';
import { User } from './user/model/user-model';
import 'rxjs/add/operator/merge';
import { Message } from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public msgs: Message[] = [];
  public currentUser: User;
  private globalClickCallbackFn: Function;
  private loginSuccessCallbackFn: Function;

  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private translate: TranslateService,
    private userLoginService: UserLoginService,
    private userRegisterService: UserRegisterService
  ) { }

  ngOnInit(): void {
    this.globalClickCallbackFn = this.renderer.listen(this.elementRef.nativeElement, 'clickl', (event: any) => {
      console.log('全局监听点击事件', event);
    });

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.userLoginService.currentUser
      .merge(this.userRegisterService.currentUser)
      .subscribe(
      data => {
        this.currentUser = data;
        let activatedRouteSnapshot: ActivatedRouteSnapshot = this.activateRoute.snapshot;
        let routerState: RouterState = this.router.routerState;
        let routerStateSnapshot: RouterStateSnapshot = routerState.snapshot;

        console.log(activatedRouteSnapshot);
        console.log(routerState);
        console.log(routerStateSnapshot);

        if (routerStateSnapshot.url.indexOf('/login') !== -1) {
          this.router.navigateByUrl('/home');
        }
      },
      error => {
        console.error(error);
      }
      );

      this.translate.addLangs(['zh', 'en']);
      this.translate.setDefaultLang('zh');
      const browserLang = this.translate.getBrowserLang();
      console.log('检测到浏览器语言为>' + browserLang);
      this.translate.use(browserLang.match('/zh|en/') ? browserLang : 'zh');
  }

  ngOnDestroy(): void {
    if (this.globalClickCallbackFn) {
      this.globalClickCallbackFn();
    }
  }

  public toggle(button: any): void {
    console.log(button);
  }

  public doLogout(): void {
    this.userLoginService.logout();
    this.msgs = [];
    this.msgs.push({ severity: 'success', summary: 'Success Message', detail: '退出成功' });
    this.router.navigateByUrl('');
  }

}
