import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs, URLSearchParams, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from '../../model/post-model';

@Injectable()
export class PostDetailService {
  private postDetailURL = 'mock-data/post-mock.json';

  constructor(private http: Http) { }

  public getPost(id: number | string): Observable<Post> {
    let requestOptions: RequestOptions;
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', String(id));
    requestOptions = new RequestOptions({ search: params });

    return this.http.get(this.postDetailURL)
      .map((res: Response) => res.json())
      .catch((err: any) => {
        console.error(err);
        return Observable.throw(err || 'server error');
      });
  }

}
