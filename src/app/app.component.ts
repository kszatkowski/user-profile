import { Component, OnInit } from '@angular/core';
import { UserProfileService, IUserProfileData } from './services/user-profile.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

	userProfileData: IUserProfileData;

	constructor(private _userProfileService: UserProfileService) { }

	ngOnInit(): void {
		this._userProfileService
			.getJSON()
			.subscribe((response: IUserProfileData) => this.userProfileData = response);
	}
	title = 'user-profile';
}
