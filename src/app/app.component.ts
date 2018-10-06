import { Component, OnInit } from '@angular/core';

import { UserProfileService } from '@app/services/user-profile.service';
import { IUserProfileData } from '@app/interfaces/IUserProfileData';
import { compare } from '@app/shared/functions/compare';

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
			.subscribe((response: IUserProfileData) => {
				response.comments.sort((comment1, comment2) => compare<Date>(comment1.date, comment2.date));
				this.userProfileData = response;
			});
	}
}