import { Component, Input, OnInit } from '@angular/core';
import { BaseComponentComponent } from 'src/app/lib/base-component/base-component.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent
  extends BaseComponentComponent
  implements OnInit
{
  @Input()
  idProduct: number = 0;

  array = [1, 2, 3, 4];

  @Input()
  isComment = false;

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }
}
