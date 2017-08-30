import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Comment } from '../model/comment-model';

@Injectable()
export class CommentService {
  private commentListURL = 'mock-data/comment-mock.json';

  constructor(private http: Http) { }

  public getCommentList(postId: number | string): Observable<Comment> {
    let requestOptions: RequestOptionsArgs;
    let params: URLSearchParams = new URLSearchParams();
    params.set('postId', String(postId));
    requestOptions = new RequestOptions({ search: params });

    return this.http.get(this.commentListURL, requestOptions)
      .map((res: Response) => res.json());
  }

}
