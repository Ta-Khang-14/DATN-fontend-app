import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CommentComponent],
  imports: [CommonModule, NzCommentModule, NzIconModule, NzAvatarModule],
  exports: [CommentComponent],
})
export class CommentModule {}
