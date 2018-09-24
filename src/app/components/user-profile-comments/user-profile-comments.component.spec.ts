import { Component, Input } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';

import { UserProfileCommentsComponent } from './user-profile-comments.component';
import { IProfile } from '../../interfaces/IProfile';
import { IComment } from '../../interfaces/IComment';

@Component({
	selector: 'app-comment',
	template: ''
})
class CommentComponentMock {

	@Input() profile: IProfile;
	@Input() comment: IComment;
}

describe('UserProfileCommentsComponent', () => {
	let component: UserProfileCommentsComponent;
	let fixture: ComponentFixture<UserProfileCommentsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserProfileCommentsComponent, CommentComponentMock],
			imports: [
				FormsModule,
				ReactiveFormsModule,
				BrowserAnimationsModule,
				MatInputModule
			]
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

	describe('toggleComments', () => {
		it('should switch value on opposite', () => {
			component.toggle = false;
			component.toggleComments();
			expect(component.toggle).toBeTruthy();
		});
	});
});
