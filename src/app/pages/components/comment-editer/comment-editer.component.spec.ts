import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentEditerComponent } from './comment-editer.component';

describe('CommentEditerComponent', () => {
  let component: CommentEditerComponent;
  let fixture: ComponentFixture<CommentEditerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentEditerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentEditerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
