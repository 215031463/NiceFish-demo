import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PaginatorModule } from 'primeng/components/paginator/paginator';

import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostDetailMainComponent } from './post-detail-main/post-detail-main.component';
import { PostListComponent } from './post-list/post-list.component';
import { AddCommentComponent } from '../comment/add-comment/add-comment.component';
import { BooleanPipe } from '../utils/boolean.pipe';

import { PostListService } from './post-list/service/post-list.service';
import { PostDetailService } from './post-detail/service/post-detail.service';
import { CommentService } from '../comment/service/comment.service';

@NgModule({
  imports: [
    SharedModule,
    PaginatorModule,
    PostRoutingModule
  ],
  declarations: [
    PostDetailComponent,
    PostDetailMainComponent,
    PostListComponent,
    AddCommentComponent,
    BooleanPipe
  ],
  providers: [
    PostListService,
    PostDetailService,
    CommentService
  ],
  exports: [ BooleanPipe ]
})
export class PostModule { }
