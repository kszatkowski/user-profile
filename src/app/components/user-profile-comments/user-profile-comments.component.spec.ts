import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileCommentsComponent } from './user-profile-comments.component';

describe('UserProfileCommentsComponent', () => {
  let component: UserProfileCommentsComponent;
  let fixture: ComponentFixture<UserProfileCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
