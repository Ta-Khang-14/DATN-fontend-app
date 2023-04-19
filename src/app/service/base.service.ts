import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorage } from '../common/local-storage';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(public httpClient: HttpClient) {}

  setHeader() {
    let token = LocalStorage.getLocalStorage('token');
    let headers = new HttpHeaders({ Authorization: 'Bearer ' + token });
    return headers;
  }
}
