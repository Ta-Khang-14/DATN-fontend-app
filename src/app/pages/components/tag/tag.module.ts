import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';

import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [TagComponent],
  imports: [CommonModule, NzTagModule],
  exports: [TagComponent],
})
export class TagModule {}
