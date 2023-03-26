import { Component, Input, OnInit } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { BaseComponentComponent } from 'src/app/lib/base-component/base-component.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent
  extends BaseComponentComponent
  implements OnInit
{
  @Input()
  productDetail: any = {};

  constructor(public drawerService: NzDrawerService) {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  // Mở Drawer chi tiết sản phẩm
  openViewDetail(e: any) {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Drawer Title',
      nzSize: 'large',
    });

    drawerRef.afterClose.subscribe(() => {});
  }
}
