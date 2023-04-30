import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { LocalStorage } from '../common/local-storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(public datasv: DataService) {}

  isAdmin = true;
  userName: string = '';
  routerRegister = '/login';

  ngOnInit(): void {
    this.getUserName();
    this.datasv.registerSuccessfully.subscribe((res) => {
      this.getUserName();
    });
  }

  getUserName() {
    if (LocalStorage.getLocalStorage('user_email')) {
      this.userName = LocalStorage.getLocalStorage('user_email') ?? '';
      this.routerRegister = '/me';
    } else {
      this.userName = '';
      this.routerRegister = '/login';
    }
  }
}
