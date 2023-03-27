import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentEditerComponent } from './comment-editer.component';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CommentEditerComponent],
  imports: [
    CommonModule,
    NzAvatarModule,
    NzCommentModule,
    NzIconModule,
    NzInputModule,
    NzFormModule,
    NzButtonModule,
    FormsModule,
  ],
  exports: [CommentEditerComponent],
})
export class CommentEditerModule {}
