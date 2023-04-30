import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LocalStorage } from '../common/local-storage';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ultility } from '../common/ultility';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  constructor(public router: Router, public snackbar: MatSnackBar) {}

  // tạo interceptor control response trả về
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = LocalStorage.getLocalStorage('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      tap(
        () => {},
        (err: any) => {
          if (err instanceof HttpErrorResponse) {
            switch (err.status) {
              case 401:
                Ultility.showSnackBar(
                  this.snackbar,
                  'Phiên bản đăng nhập hết hạn'
                );
                this.router.navigate(['login']);
                return;
              case 403:
                this.router.navigate(['access-denied']);
                return;
              default:
                return;
            }
          }
        }
      )
    );
  }
}
