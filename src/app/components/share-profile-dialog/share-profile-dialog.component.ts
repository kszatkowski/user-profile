import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-share-profile-dialog',
	templateUrl: './share-profile-dialog.component.html',
	styleUrls: ['./share-profile-dialog.component.scss']
})
export class ShareProfileDialogComponent implements OnInit {

	profileUrl: string;
	constructor(private dialogRef: MatDialogRef<ShareProfileDialogComponent>) { }

	ngOnInit() {
		this.profileUrl = window.location.href;
	}

	close(): void {
		this.dialogRef.close();
	}
}
