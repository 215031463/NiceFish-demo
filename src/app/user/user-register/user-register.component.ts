import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UserRegisterService } from './user-register.service';
import { User } from '../model/user-model';
import { flyInOut } from '../../animations/fly-in-out';

import { EqualValidate } from './equal-validator';


@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss'],
  animations: [ flyInOut ]
})
export class UserRegisterComponent implements OnInit {

  public userForm: FormGroup;
  public userInfo: User = new User();

  public formErrors = {
    'userName': '',
    'nickName': '',
    'email': '',
    'password': '',
    'confirmPassword': '',
    'formError': '',
    'vcode': ''
  };

  public validatorMessages = {
    'userName': {
      'required': '用户名必须输入',
      'minlength': '用户名4到32个字符'
    },
    'nickName': {
      'required': '昵称必须输入',
      'minlength': '昵称2到32个字符'
    },
    'email': {
      'required': '邮箱必须输入',
      'pattern': '请输入正确的邮箱格式'
    },
    'password': {
      'required': '密码必须输入',
      'minlength': '密码至少要8位'
    },
    'confirmPassword': {
      'required': '重复密码必须输入',
      'minlength': '密码至少要8位',
      'validateEqual': '两次输入密码不一致'
    },
    'vcode': {
      'required': '验证码必须输入',
      'minlength': '4位验证码',
      'maxlength': '4位验证码'
    }
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userRegisterService: UserRegisterService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  public buildForm(): void {
    this.userForm = this.fb.group({
      'userName': [
        this.userInfo.userName,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ]
      ],
      'nickName': [
        this.userInfo.nickName,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32)
        ]
      ],
      'email': [
        this.userInfo.email,
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$')
        ]
      ],
      'password': [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      'confirmPassword': [
        this.userInfo.confirmPassword,
        [
          Validators.required,
          Validators.minLength(8),
          EqualValidate('password')
        ]
      ],
      'vcode': [
        this.userInfo.vcode,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ]
      ]
    });

    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  public onValueChanged(data?: any) {
    if (!this.userInfo) {
      return;
    }
    let form = this.userForm;
    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field);
      if (control && control.dirty && control.invalid) {
        let messages = this.validatorMessages[field];
        for (let key in control.errors) {
          this.formErrors[field] = messages[key] + ' ';
        }
      }
    }
  }

  public doRegister(): void {
    if (this.userForm.valid) {
      this.userInfo = this.userForm.value;
      this.userRegisterService.register(this.userInfo)
        .subscribe(
        data => {
          this.router.navigateByUrl('/home');
        },
        err => {
          this.formErrors.formError = err.message;
          console.log(err);
        }
        );
    } else {
      this.formErrors.formError = '表单存在不合法的输入想，请检车。';
    }
    console.log(this.userInfo);
  }

  public testEmail() {
    let email = this.userForm.get('email').value;
    this.userRegisterService.testEmail(email)
      .subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.error(err);
      }
      );
  }

}
