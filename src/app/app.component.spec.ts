import { Component, Input } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { from } from 'rxjs';

import { IUserProfileData } from './interfaces/IUserProfileData';
import { AppComponent } from './app.component';
import { UserProfileService } from './services/user-profile.service';
import { IProfile } from './interfaces/IProfile';
import { IComment } from './interfaces/IComment';

@Component({
	selector: 'app-user-profile-header',
	template: ''
})
class UserProfileHeaderComponentMock {
	@Input() userProfileData: IUserProfileData;
}
@Component({
	selector: 'app-user-profile-comments',
	template: ''
})
class UserProfileCommentsComponentMock {
	@Input() profile: IProfile;
	@Input() comments: Array<IComment>;
}

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;

	let userProfileService: UserProfileService

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			declarations: [
				AppComponent,
				UserProfileHeaderComponentMock,
				UserProfileCommentsComponentMock
			],
			providers: [UserProfileService]
		}).compileComponents();

		userProfileService = TestBed.get(UserProfileService);
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
	}));

	beforeEach(() => {
		spyOn(userProfileService, 'getJSON').and.callFake(() => {
			return from([]);
		});
	});

	it('should create the app', async(() => {
		expect(component).toBeTruthy();
	}));

	describe('ngOnInit', () => {
		it('should get data from UserProfileService', () => {
			component.ngOnInit();
			expect(userProfileService.getJSON).toHaveBeenCalled();
		});
	});
});
