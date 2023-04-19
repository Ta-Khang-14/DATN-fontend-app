import { Component, Input, OnInit } from '@angular/core';
import { TypeSnackBar } from 'src/app/common/type-snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css'],
})
export class SnackBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  type: TypeSnackBar = TypeSnackBar.Success;

  @Input()
  message: string = '';
}
