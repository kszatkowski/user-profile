import { Component, Input } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { IUserProfileData, UserProfileService } from './services/user-profile.service';
import { from } from 'rxjs';

@Component({
	selector: 'app-user-profile-header',
	template: ''
})
class UserProfileHeaderComponentMock {
	@Input() userProfileData: IUserProfileData;
}

describe('AppComponent', () => {
	let userProfileService: UserProfileService

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			declarations: [
				AppComponent,
				UserProfileHeaderComponentMock
			],
			providers: [UserProfileService]
		}).compileComponents();

		userProfileService = TestBed.get(UserProfileService);
	}));

	describe('', () => {
		beforeEach(() => {
			spyOn(userProfileService, 'getJSON').and.callFake(() => {
				return from(null);
			});
		});

		it('should create the app', async(() => {
			const fixture = TestBed.createComponent(AppComponent);
			const app = fixture.debugElement.componentInstance;
			expect(app).toBeTruthy();
		}));
	})


});
