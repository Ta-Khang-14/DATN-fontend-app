import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  @Input()
  commentInfo: any = {
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  };

  @Input()
  likeState: boolean = false;

  @Input()
  dislikeState: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  like() {
    this.likeState = !this.likeState;
    this.dislikeState = false;
  }

  dislike() {
    this.dislikeState = !this.dislikeState;
    this.likeState = false;
  }
}
