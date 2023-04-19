import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  // Băn sự kiện đăng kí thành công
  registerSuccessfully = new Subject<any>();
  sendRegisterSucessEvent() {
    this.registerSuccessfully.next(true);
  }
}
