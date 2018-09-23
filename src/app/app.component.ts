import { Component, OnInit } from '@angular/core';
import { UserProfileService, IUserProfileData } from './services/user-profile.service';
import { IComment } from './components/user-profile-comments/user-profile-comments.component';

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