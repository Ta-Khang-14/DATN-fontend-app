import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { LocalStorage } from '../common/local-storage';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorCode } from '../common/error-code';
import { Ultility } from '../common/ultility';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Validate } from '../common/validate';

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

  objectDataLogin = {
    AccountEmail: '',
    AccountPassword: '',
  };

  isForgetPassword = false;

  ngOnInit(): void {}

  forgetPassword() {
    this.isForgetPassword = !this.isForgetPassword;
  }

  validateInfor(objectData: any) {
    let _this = this;
    if (
      !objectData.AccountEmail ||
      !objectData.AccountPhone ||
      !objectData.AccountPassword
    ) {
      Ultility.showSnackBar(_this._snackBar, 'Thông tin không được để trống');
      return false;
    }

    if (!Validate.validateEmail(objectData.AccountEmail)) {
      Ultility.showSnackBar(_this._snackBar, 'Email sai định dạng');
      return false;
    }

    if (!Validate.validatePassword(objectData.AccountEmail)) {
      Ultility.showSnackBar(
        _this._snackBar,
        'Mật khẩu phải chứa ít nhất 4 kí tự'
      );
      return false;
    }

    return true;
  }
  // đăng kí
  register() {
    if (!this.validateInfor(this.objectDataRegister)) {
      return;
    }

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

  // validate thông tin đăng nhập
  validateLogin(objectData: any) {
    let _this = this;
    if (!objectData.AccountEmail || !objectData.AccountPassword) {
      Ultility.showSnackBar(_this._snackBar, 'Thông tin không được để trống');
      return false;
    }

    if (!Validate.validateEmail(objectData.AccountEmail)) {
      Ultility.showSnackBar(_this._snackBar, 'Email sai định dạng');
      return false;
    }

    if (!Validate.validatePassword(objectData.AccountEmail)) {
      Ultility.showSnackBar(
        _this._snackBar,
        'Mật khẩu phải chứa ít nhất 4 kí tự'
      );
      return false;
    }

    return true;
  }

  login() {
    if (!this.validateLogin(this.objectDataLogin)) {
      return;
    }
    this.authService.login(this.objectDataLogin).subscribe((res) => {
      if (res && res.success) {
        LocalStorage.setLocalStorage('token', res.data);
        LocalStorage.setLocalStorage(
          'user_email',
          this.objectDataLogin.AccountEmail
        );
        this.router.navigate(['/home']);
      } else {
        let message = '';
        switch (res.errorCode) {
          case ErrorCode.ErrorValidation:
            message = 'Sai thông tin đăng nhập';
            break;
          default:
            message = 'Đã có lỗi xảy ra';
        }
        Ultility.showSnackBar(this._snackBar, message, 'danger');
      }
    });
  }
}
