import { Injectable } from '@angular/core';
import { config } from 'rxjs';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ResponseAPI } from '../common/response';
import { LocalStorage } from '../common/local-storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  constructor(public http: HttpClient, public route: Router) {
    super(http);
  }

  enpoint: string = 'https://localhost:7290/api/Authentication/';

  register(data: any) {
    return this.http.post<ResponseAPI>(`${this.enpoint}register`, data);
  }

  login(data: any) {
    return this.http.post<ResponseAPI>(`${this.enpoint}login`, data);
  }

  changePassword(data: any) {
    return this.http.put<ResponseAPI>(
      `${this.enpoint}Accounts/change-password`,
      data
    );
  }

  getInfor(email: string) {
    return this.http.post<ResponseAPI>(`${this.enpoint}get-infor`, {
      AccountEmail: email,
    });
  }
}
