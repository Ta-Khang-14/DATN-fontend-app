import { Component, OnInit } from '@angular/core';
import { BaseComponentComponent } from 'src/app/lib/base-component/base-component.component';

@Component({
  selector: 'app-comment-editer',
  templateUrl: './comment-editer.component.html',
  styleUrls: ['./comment-editer.component.scss'],
})
export class CommentEditerComponent
  extends BaseComponentComponent
  implements OnInit
{
  inputValue: string = '';

  submitting = false;

  constructor() {
    super();
  }

  override ngOnInit(): void {
    super.ngOnInit();
  }

  handleSubmit(): void {}
}
