import { Component, OnInit, Input } from '@angular/core';
import { flyInOut } from '../../animations/fly-in-out';
import { ActivatedRoute, Router, UrlTree, PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment, ParamMap } from '@angular/router';
import { PostTableService } from './service/post-table.service';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.scss'],
  animations: [ flyInOut ]
})
export class PostTableComponent implements OnInit {
  @Input() dataURL = 'mock-data/postlist-mock.json';

  public postList: Array<any>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private postTableService: PostTableService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => {
        let currentPage = +params.get('page');
        this.getPostsByPage(currentPage);
        this.pageChanged({ page: currentPage });
      });
  }

  public getPostsByPage(page: number): void
  {
    console.log('页码 > ' + page);
    this.postTableService.getPostTable(this.dataURL)
      .subscribe(
      res => {
        console.log(res);
        this.postList = res.items;
      },
      err => {
        console.error(err);
      },
      () => {}
      );
  }

  public pageChanged(event: any): void
  {
    let urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = urlTree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;
    this.router.navigateByUrl(s[0] + '/posttable/page/' + event.page);
    // console.group('urlTree');
    // console.log(urlTree);
    // console.groupEnd();

    // console.group('urlSegmentGroup');
    // console.log(g);
    // console.groupEnd();

    // console.group('urlSegment');
    // console.log(s);
    // console.groupEnd();
    // console.log(this.router.url);
    // console.log(this.router.parseUrl);
  }

  public goToWrite(): void
  {
    this.router.navigateByUrl('/user/write');
  }

  public editPost(event: any): void
  {
    var target = event.currentTarget;
    var nameAttr = target.attributes.name;
    var value = nameAttr.nodeValue;
    console.log('postId > ' + value);
  }

  public top(event: any): void
  {
    var target = event.currentTarget;
    var nameAttr = target.attributes.name;
    var value = nameAttr.nodeValue;
    console.log('postId > ' + value);
  }

  public unTop(event: any): void
  {
    var target = event.currentTarget;
    var nameAttr = target.attributes.name;
    var value = nameAttr.nodeValue;
    console.log('postId > ' + value);
  }

  public delPost(event: any): void
  {
    var target = event.currentTarget;
    var nameAttr = target.attributes.name;
    var value = nameAttr.nodeValue;
    console.log('postId > ' + value);
  }

  public onRowSelect(event: any): void
  {
    console.log(event.data);
  }

  public onRowUnSelect(event: any): void
  {
    console.log(event.data);
  }

}
