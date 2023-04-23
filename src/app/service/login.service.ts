import { Injectable } from '@angular/core';
import { config } from 'rxjs';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { ResponseAPI } from '../common/response';

@Injectable({
  providedIn: 'root',
})
export class LoginService extends BaseService {
  constructor(public http: HttpClient) {
    super(http);
  }

  enpoint: string = 'https://localhost:7290/api/Authentication/';

  register(data: any) {
    let headers = this.setHeader();
    return this.http.post<ResponseAPI>(`${this.enpoint}register`, data, {
      headers,
    });
  }

  changePassword(data: any) {
    let headers = this.setHeader();
    return this.http.put<ResponseAPI>(
      `${this.enpoint}Accounts/change-password`,
      data,
      {
        headers,
      }
    );
  }
}
