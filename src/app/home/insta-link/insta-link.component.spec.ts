import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaLinkComponent } from './insta-link.component';

describe('InstaLinkComponent', () => {
  let component: InstaLinkComponent;
  let fixture: ComponentFixture<InstaLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
