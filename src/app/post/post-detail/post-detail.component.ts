import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Post } from '../model/post-model';
import { PostDetailService } from './service/post-detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  private postId: string;
  private subscription: Subscription;
  public post: Post;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postDetailService: PostDetailService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => {
        this.getPost(+params.get('postId'));
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public getPost(id: number) {
    this.subscription = this.postDetailService.getPost(id)
      .subscribe(
      data => this.post = data,
      err => console.error(err)
      );
  }

}
