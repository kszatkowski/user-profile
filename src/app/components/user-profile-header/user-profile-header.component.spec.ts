import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileHeaderComponent } from './user-profile-header.component';
import { Component, Input } from '@angular/core';

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
}

describe('UserProfileHeaderComponent', () => {
	let component: UserProfileHeaderComponent;
	let fixture: ComponentFixture<UserProfileHeaderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [UserProfileHeaderComponent, StatisticsComponentMock, DisplayNameComponentMock]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(UserProfileHeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
