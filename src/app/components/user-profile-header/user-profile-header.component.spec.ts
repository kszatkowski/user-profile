import { Component, Input } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileHeaderComponent } from './user-profile-header.component';

@Component({
	selector: 'app-statistics',
	template: ''
})
class StatisticsComponentMock {
	@Input() likes: number;
	@Input() following: number;
	@Input() followers: number;
}
@Component({
	selector: 'app-display-name',
	template: ''
})
class DisplayNameComponentMock {
	@Input() fullName: string;
	@Input() city: string;
	@Input() image: string;
	@Input() imgWidth: number;
	@Input() imgHeight: number;
	@Input() hideLikeButton: boolean;
	@Input() likeButtonClicked: boolean;
}

describe('UserProfileHeaderComponent', () => {
	let component: UserProfileHeaderComponent;
	let fixture: ComponentFixture<UserProfileHeaderComponent>;
	let dialog: MatDialog;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserProfileHeaderComponent, StatisticsComponentMock, DisplayNameComponentMock],
			imports: [MatDialogModule]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserProfileHeaderComponent);
		component = fixture.componentInstance;
		dialog = TestBed.get(MatDialog);
		spyOn(dialog, 'open');
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('like', () => {
		beforeEach(() => {
			component.userProfileData = {
				profile: { fullName: '', city: '', image: '' },
				comments: [],
				followers: 0,
				following: 0,
				likes: 10
			}
		});
		describe('when likeButtonClicked was set on false', () => {
			beforeEach(() => {
				component.likeButtonClicked = false;
			});

			it('should increment likes value', () => {
				component.like();
				expect(component.userProfileData.likes).toBe(11);
			});

			it('should set followButtonClicked value on true', () => {
				component.like();
				expect(component.likeButtonClicked).toBe(true);
			});
		});

		describe('when likeButtonClicked was set on true', () => {
			beforeEach(() => {
				component.likeButtonClicked = true;
			});

			it('should decrement likes value', () => {
				component.like();
				expect(component.userProfileData.likes).toBe(9);
			});

			it('should set followButtonClicked value on false', () => {
				component.like();
				expect(component.likeButtonClicked).toBe(false);
			});
		});
	});

	describe('shareProfile', () => {
		it('should open dialog', () => {
			component.shareProfile();
			expect(dialog.open).toHaveBeenCalled();
		});
	});
});
