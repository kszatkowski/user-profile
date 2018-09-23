import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

export interface IComment {
	content: string;
	date: Date;
}

export interface IProfile {
	fullName: string;
	city: string;
	image: string
}

@Component({
	selector: 'app-user-profile-comments',
	templateUrl: './user-profile-comments.component.html',
	styleUrls: ['./user-profile-comments.component.scss']
})
export class UserProfileCommentsComponent {

	@Input() profile: IProfile;
	@Input() comments: Array<IComment>;
	toggle: boolean = false;
	submitted: boolean = false;
	commentFormControl: FormControl = new FormControl('', [
		Validators.required
	]);

	toggleComments(): void {
		this.toggle = !this.toggle;
	}

	keyDownFunction(event) {
		this.submitted = true;
		if (event.keyCode == 13 && this.commentFormControl.valid) {
			let comment: IComment = {
				content: this.commentFormControl.value,
				date: new Date()
			}

			this.comments.push(comment);
			this.commentFormControl.setValue('');
			this.submitted = false;
		}
	}
}
