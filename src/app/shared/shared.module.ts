import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductComponent } from './list-product/list-product.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@NgModule({
  declarations: [ListProductComponent, SnackBarComponent],
  imports: [CommonModule],
  exports: [ListProductComponent],
})
export class SharedModule {}
