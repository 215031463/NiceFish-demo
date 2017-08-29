import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { PostListService } from './service/post-list.service';
import { Post } from '../model/post-model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  public itemsPerPage = 5;
  public totalRecords = 11;
  public currentPage = 1;
  public offset = 0;
  public end = 0;

  public searchText: string;
  public searchTextStream: Subject<string> = new Subject();

  public postList: Array<Post>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postListService: PostListService
  ) {
    console.log('====  这里开始对比 Promise 和 Observable， 学习如何使用Observable  ====');

    // Promise写法
    let promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('--- promise timeout ---');
      }, 2000);
    });
    promise.then(data => console.log(data));

    // Observable用法
    let stream1$ = new Observable(observer => {
      let timeout = setTimeout(() => {
        observer.next('observable timeout');
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    });
    let disposable = stream1$.subscribe(data => console.log(data));

    // 第一个不同点 Observable是可以中途取消的， 而 Promise 一旦触发就不能取消
    // setTimeout(() => {
    //   disposable.unsubscribe();
    // }, 1000);

    // 第二个不同点 Observable 可以持续发射多个值， 而 Promise 发射一个值就结束了
    // let stream2$ = new Observable(observer => {
    //   let num = 0;
    //   let timer = setTimeout(() => {
    //     observer.next(num++);
    //   }, 2000);

    //   return () => {
    //     clearInterval(timer);
    //   };
    // });
    // let subscription: Subscription = stream2$.subscribe(data => {
    //   if (data >= 20) {
    //     subscription.unsubscribe();
    //   }
    //   console.log(data);
    // });

    // 第三个不同点 Observable 提供了很多操作符， 用来处理流  常用 filter 和 map 等
    // stream2$
    //   .filter((data: number) => data % 2 === 0)
    //   .subscribe(data => console.log(data));

    // stream2$
    //   .map((data: number) => data * data)
    //   .subscribe(data => console.log(data));

    console.log('====  Promise 和 Observable 对比结束  ====');
  }

  ngOnInit() {
    // 从路由里面获取 URL 参数
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => {
        console.log(params);
        this.currentPage = +params.get('page');
        this.loadData(this.searchText);
      });

    // 订阅searchTextStream流
    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        console.log(searchText);
        this.loadData(this.searchText);
      });
  }

  public loadData(searchText: string) {
    this.offset = (this.currentPage - 1) * this.itemsPerPage;
    this.end = this.currentPage * this.itemsPerPage;
    this.postListService.getPostList(searchText, this.currentPage)
      .subscribe(
      res => {
        this.postList = res['items'].slice(this.offset, this.end > this.totalRecords ? this.totalRecords : this.end);
      },
      err => {
        console.error(err);
      },
      () => {}
      );
  }

  public pageChanged(event: any): void {
    let temp = parseInt(event.page, 10) + 1;
    this.router.navigate(['posts/page/' + temp]);
  }

  public seachChanged($event): void {
    this.searchTextStream.next(this.searchText);
  }

  public goToWrite(): void {
    // TODO: 如果没有登录， 就跳转到登录页面， 如果已登录，就跳转到写作页面
    this.router.navigate(['user/write']);
  }

}
