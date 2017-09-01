import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PostSharedModule } from '../shared/post.module';

import { UserMainComponent } from './user-main/user-main.component';
import { WritePostComponent } from '../post/write-post/write-post.component';
import { PostTableService } from '../manage/post-table/service/post-table.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    PostSharedModule,
    UserRoutingModule
  ],
  declarations: [
    UserMainComponent,
    WritePostComponent
  ],
  providers: [ PostTableService ],
  exports: [ UserMainComponent ]
})
export class UserModule { }
