import { NgModule } from '@angular/core';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CalendarModule } from 'primeng/components/calendar/calendar';

import { SharedModule } from './shared.module';
import { PostTableComponent } from '../manage/post-table/post-table.component';
import { CommentTableComponent } from '../manage/comment-table/comment-table.component';

@NgModule({
  imports: [
    SharedModule,
    DataTableModule,
    CalendarModule
  ],
  declarations: [
    PostTableComponent,
    CommentTableComponent
  ],
  exports: [
    PostTableComponent,
    CommentTableComponent
  ]
})
export class PostSharedModule { }
