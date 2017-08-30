import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { CommentService } from '../service/comment.service';
import { Comment } from '../model/comment-model';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  public commentList: Comment[];

  constructor(
    private commentService: CommentService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(
      (params: ParamMap) => {
        let postId = params.get('postId');
        this.getCommentList(postId);
      }
      );
  }

  private getCommentList(postId: number | string): void {
    this.commentService.getCommentList(postId)
      .subscribe(
      (data) => {
        this.commentList = data['items'];
      },
      (err: any) => {
        console.error(err);
      },
      () => {

      }
      );
  }

}
