import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { FieldBase, Textbox, Textarea, Image } from './dynamic-form/form-field';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input() fields: FieldBase<any>[] = [
    new Image({
      src: 'assets/imgs/angular2-small.png',
      title: 'this is angular picture'
    }),
    new Textbox({
      label: '头像',
      placeholder: '上传头像',
      type: 'file'
    }),
    new Textbox({
      label: '用户名',
      placeholder: '用户名'
    }),
    new Textbox({
      label: '常用邮箱',
      placeholder: '常用邮箱'
    }),
    new Textbox({
      label: '密码:',
      type: 'password',
      placeholder: '密码，至少8位'
    }),
    new Textbox({
      label: '重复密码:',
      type: 'password',
      placeholder: '重复密码'
    }),
    new Textarea({
      label: '个人简介:',
      placeholder: '个人简介，最多140字，不能放链接。',
      rows: 3,
    })
  ];

  public form: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.form = this.toFormGroup(this.fields);

    this.activatedRoute.paramMap
      .subscribe((params: ParamMap) => {
        console.log(params);
      });
  }

  private toFormGroup(fields: FieldBase<any>[]): FormGroup {
    let group: any = {};
    fields.forEach(field => {
      group[field.key] = field.required ? new FormControl(field.value, Validators.required) : new FormControl(field.value);
    });
    return new FormGroup(group);
  }

  public onSave(): void {
    console.log(this.form.value);
  }

}
