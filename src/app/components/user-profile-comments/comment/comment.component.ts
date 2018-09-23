import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IComment, IProfile } from '../user-profile-comments.component';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

	@Input() profile: IProfile;
	@Input() comment: IComment;

	constructor() { }

	ngOnInit() {
	}

}
