import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ShareProfileDialogComponent } from '@app/components/share-profile-dialog/share-profile-dialog.component';
import { IUserProfileData } from '@app/interfaces/IUserProfileData';

@Component({
	selector: 'app-user-profile-header',
	templateUrl: './user-profile-header.component.html',
	styleUrls: ['./user-profile-header.component.scss']
})
export class UserProfileHeaderComponent {

	@Input() userProfileData: IUserProfileData;

	get dialogConfig(): MatDialogConfig {
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.disableClose = false;
		dialogConfig.minHeight = '200px';
		dialogConfig.minWidth = '300px';

		return dialogConfig;
	}

	constructor(private dialog: MatDialog) { }

	incrementLikeCount(): void {
		this.userProfileData.likes++;
	}

	shareProfile(): void {
		this.dialog.open(ShareProfileDialogComponent, this.dialogConfig)
	}
}
