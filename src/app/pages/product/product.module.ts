import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CommentModule } from '../components/comment/comment.module';
import { CommentEditerModule } from '../components/comment-editer/comment-editer.module';

@NgModule({
  declarations: [
    ListProductComponent,
    ProductCardComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NzDividerModule,
    NzCardModule,
    NzAvatarModule,
    NzSkeletonModule,
    NzGridModule,
    NzLayoutModule,
    NzIconModule,
    NzToolTipModule,
    NzBadgeModule,
    NzDrawerModule,
    NzTagModule,
    NzCarouselModule,
    NzDescriptionsModule,
    CommentModule,
    CommentEditerModule,
  ],
})
export class ProductModule {}
