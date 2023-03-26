import { Component, OnInit } from '@angular/core';
import { BaseComponentComponent } from 'src/app/lib/base-component/base-component.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent
  extends BaseComponentComponent
  implements OnInit
{
  constructor() {
    super();
  }

  listProduct: Array<any> = [
    {
      ID: 1,
      ProductCode: 'P001',
      ProductName: 'Sản phẩm 1',
      Price: 5000,
      Vote: 4.5,
      Image:
        'http://www.nicdarkthemes.com/themes/restaurant/wp/…ant/wp-content/uploads/sites/2/2019/01/img-03.jpg',
      TypeProduct: 1,
      TypeProductName: 'Loại sản phẩm 1',
    },
    {
      ID: 1,
      ProductCode: 'P001',
      ProductName: 'Sản phẩm 1',
      Price: 5000,
      Vote: 4.5,
      Image:
        'http://www.nicdarkthemes.com/themes/restaurant/wp/…ant/wp-content/uploads/sites/2/2019/01/img-03.jpg',
    },
    {
      ID: 1,
      ProductCode: 'P001',
      ProductName: 'Sản phẩm 1',
      Price: 5000,
      Vote: 4.5,
      Image:
        'http://www.nicdarkthemes.com/themes/restaurant/wp/…ant/wp-content/uploads/sites/2/2019/01/img-03.jpg',
      TypeProduct: 1,
      TypeProductName: 'Loại sản phẩm 1',
    },
    {
      ID: 1,
      ProductCode: 'P001',
      ProductName: 'Sản phẩm 1',
      Price: 5000,
      Vote: 4.5,
      Image:
        'http://www.nicdarkthemes.com/themes/restaurant/wp/…ant/wp-content/uploads/sites/2/2019/01/img-03.jpg',
    },
  ];

  listTypeProduct: Array<any> = [
    {
      ID: 1,
      TypeProductName: 'Loại sản phẩm 1',
    },
    {
      ID: 1,
      TypeProductName: 'Loại sản phẩm 2',
    },
  ];
  override ngOnInit(): void {
    super.ngOnInit();
  }
}
