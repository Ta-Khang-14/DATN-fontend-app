import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorCode } from '../common/error-code';
import { Ultility } from '../common/ultility';
import { catchError } from 'rxjs';
import { LocalStorage } from '../common/local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  objectData = {
    AccountEmail: '',
    AccountPhone: '',
  };

  objectPassword = {
    AccountPassword: '',
    NewPassword: '',
    ConfirmPassword: '',
  };

  validate = {
    success: false,
    message: '',
  };

  isOpenChangePassword = false;

  constructor(
    public accountSv: LoginService,
    private _snackBar: MatSnackBar,
    public route: Router
  ) {}

  ngOnInit(): void {
    this.getAccountInfor();
  }

  clickChangePassword() {
    if (this.isOpenChangePassword) {
      let res = this.validateChangePassword();
      if (!res) {
        return;
      } else {
        this.postDataToChangePassword({
          ...this.objectPassword,
          AccountEmail: this.objectData.AccountEmail,
        });
      }
    } else {
      this.isOpenChangePassword = true;
    }
  }

  validateChangePassword() {
    if (
      this.objectPassword.ConfirmPassword !== this.objectPassword.NewPassword
    ) {
      this.validate.success = true;
      this.validate.message = 'Mật khẩu xác nhận phải trùng với mật khẩu mới';
      return false;
    }
    if (
      !this.objectPassword.ConfirmPassword ||
      !this.objectPassword.NewPassword ||
      !this.objectPassword.AccountPassword
    ) {
      this.validate.success = true;
      this.validate.message = 'Thiếu thông tin';
      return false;
    }
    return true;
  }

  // gửi dữ liệu đổi mật khẩu
  postDataToChangePassword(data: any) {
    this.validate.message = '';
    this.accountSv.changePassword(data).subscribe((res) => {
      if (res.success && res.data) {
        Ultility.showSnackBar(
          this._snackBar,
          'Đổi mật khẩu thành công',
          'success'
        );
        this.validate.success = false;
        this.isOpenChangePassword = true;
      } else {
        let message = '';
        switch (res.errorCode) {
          case ErrorCode.WrongPasswordOrUserName:
            message = 'Bạn đã nhập sai mật khẩu';
            break;
          default:
            message = 'Đã có lỗi xảy ra';
        }
        Ultility.showSnackBar(this._snackBar, message, 'danger');
      }
    });
  }

  // lấy thông tin tài khoản
  getAccountInfor() {
    let _this = this;
    let email = LocalStorage.getLocalStorage('user_email');
    if (!email) {
      this.route.navigate(['/login']);
    } else {
      this.accountSv.getInfor(email).subscribe((res) => {
        if (res && res.success) {
          _this.objectData.AccountEmail = res.data?.AccountEmail;
          _this.objectData.AccountPhone = res.data?.AccountPhone;
        } else {
          Ultility.showSnackBar(_this._snackBar, 'Có lỗi xảy ra');
        }
      });
    }
  }
}
