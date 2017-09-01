import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserMainComponent } from './user-main/user-main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WritePostComponent } from '../post/write-post/write-post.component';
import { PostTableComponent } from '../manage/post-table/post-table.component';
import { CommentTableComponent } from '../manage/comment-table/comment-table.component';

const routes: Routes = [
  {
    path: '',
    component: UserMainComponent,
    children: [
      { path: '', redirectTo: 'posttable/page/1', pathMatch: 'full' },
      { path: 'write', component: WritePostComponent },
      { path: 'posttable/page/:page', component: PostTableComponent },
      { path: 'commenttable/page/:page', component: CommentTableComponent },
      { path: 'profile', component: UserProfileComponent },
      { path: '**', redirectTo: 'write' }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule { }
