import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { BaseComponentComponent } from 'src/app/lib/base-component/base-component.component';
import { TagComponent } from '../../components/tag/tag.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

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
  productDetailData: any = {};

  productDetail: TemplateRef<ProductDetailComponent> | undefined;

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
      nzContent: ProductDetailComponent,
      nzContentParams: {
        idProduct: 1,
      },
    });

    drawerRef.afterClose.subscribe(() => {});
  }

  openViewComment(e: any, isComment: boolean) {
    const drawerRef = this.drawerService.create({
      nzTitle: 'Drawer Title',
      nzSize: 'large',
      nzContent: ProductDetailComponent,
      nzContentParams: {
        idProduct: 1,
        isComment: isComment,
      },
    });

    drawerRef.afterClose.subscribe(() => {});
  }
}
