import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from '../../model/post-model';

@Injectable()
export class PostListService {
  private postListURL = 'mock-data/postlist-mock.json';
  private postSearchURL = 'mock-data/postlist-search-mock.json';

  constructor(private http: Http) { }

  public getPostList(searchText: string, page = 1): Observable<Post[]> {
    let url = this.postListURL;
    let requestOptions: RequestOptionsArgs;
    let params = new URLSearchParams();
    if (searchText) {
      url = this.postSearchURL;
      params.set('searchText', searchText);
    }
    params.set('page', String(page));
    requestOptions = new RequestOptions({ search: params });

    return this.http.get(url, requestOptions)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err || 'server error'));
  }

  public getPostNumber(): number {
    return 0;
  }

  public addPost() {

  }

  public search() {

  }

}
