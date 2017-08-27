import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ForgetPwdComponent } from './user/forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { ChartComponent } from './chart/chart.component';
import { GaodeMapComponent } from './map/gaode-map/gaode-map.component';
import { JsplumbDemoComponent } from './jsplumb-demo/jsplumb-demo.component';

export const routes: Routes = [
  {
    path: 'echart',
    component: ChartComponent
  },
  {
    path: 'map',
    component: GaodeMapComponent
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModle'
  },
  {
    path: 'posts',
    loadChildren: './home/home.module#HomeModle'
  },
  {
    path: 'post',
    loadChildren: './post/post.module#PostModule'
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'forgetpwd',
    component: ForgetPwdComponent
  },
  {
    path: 'register',
    component: UserRegisterComponent
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'manage',
    loadChildren: './manage/manage.module#ManageModule'
  },
  {
    path: 'jsplumb',
    component: JsplumbDemoComponent
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: './home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
