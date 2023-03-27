import { Component, Input, OnInit } from '@angular/core';
import { Role } from 'src/app/common/Role.enum';

@Component({
  selector: 'app-base-component',
  templateUrl: './base-component.component.html',
  styleUrls: ['./base-component.component.scss'],
})
export class BaseComponentComponent implements OnInit {
  @Input()
  layoutCode = '';

  @Input()
  role = Role.User;

  userInfor: any = {};

  constructor() {}

  ngOnInit(): void {}

  getRole() {}
}
