import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { LocalStorage } from '../common/local-storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorCode } from '../common/error-code';
import { Ultility } from '../common/ultility';
import { Route, Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(
    public authService: LoginService,
    private _snackBar: MatSnackBar,
    public router: Router,
    public datasv: DataService
  ) {}

  objectDataRegister = {
    AccountEmail: '',
    AccountPhone: '',
    AccountPassword: '',
  };

  isForgetPassword = false;

  ngOnInit(): void {}

  forgetPassword() {
    this.isForgetPassword = !this.isForgetPassword;
  }

  // đăng kí
  register() {
    let objectPost = {
      Data: this.objectDataRegister,
    };
    this.authService.register(objectPost).subscribe((res) => {
      if (res.success) {
        LocalStorage.setLocalStorage('token', res.data);
        LocalStorage.setLocalStorage(
          'user_email',
          this.objectDataRegister.AccountEmail
        );
        Ultility.showSnackBar(
          this._snackBar,
          'Đăng kí tài khoản thành công',
          'success'
        );
        this.datasv.sendRegisterSucessEvent();
        this.router.navigate(['/home']);
      } else {
        let message = '';
        switch (res.errorCode) {
          case ErrorCode.DuplicateField:
            message = 'Thông tin tài khoản đã tồn tại';
            break;
          case ErrorCode.MissingInputValue:
            message = 'Bạn đã nhập thiếu thông tin';
            break;
          default:
            message = 'Đã có lỗi xảy ra';
        }
        Ultility.showSnackBar(this._snackBar, message, 'danger');
      }
    });
  }
}
