import { Component, OnInit } from '@angular/core';

import { UserProfileService } from '@app/services/user-profile.service';
import { IUserProfileData } from '@app/interfaces/IUserProfileData';
import { IComment } from '@app/interfaces/IComment';

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
				this.userProfileData = response;
				this.userProfileData.comments.sort(this.compareDate);
			});
	}

	private compareDate(a: IComment, b: IComment) {
		if (a.date < b.date)
			return -1;
		if (a.date > b.date)
			return 1;
		return 0;
	}
}