import { Component, OnInit, Input } from '@angular/core';
import { IUserProfileData } from '../../services/user-profile.service';

@Component({
	selector: 'app-user-profile-header',
	templateUrl: './user-profile-header.component.html',
	styleUrls: ['./user-profile-header.component.scss']
})
export class UserProfileHeaderComponent implements OnInit {

	@Input() userProfileData: IUserProfileData;

	constructor() { }

	ngOnInit() {
	}

}
