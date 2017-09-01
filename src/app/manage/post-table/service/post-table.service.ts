import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostTableService {
  private delURL = '';
  private toEditURL = '';

  constructor(private http: Http) { }

  public getPostTable(dataURL: string): Observable<any>
  {
    return this.http.get(dataURL)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error || 'server error'));
  }

  public del(postId: number | string): Observable<any>
  {
    return this.http.delete(this.delURL)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err || 'server error'));
  }

  public toEdit(postId: number | string): Observable<any>
  {
    return this.http.get(this.toEditURL)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err || 'server error'));
  }

}
