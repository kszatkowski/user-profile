import { Component, Input } from '@angular/core';
import { IProfile } from '../../../interfaces/IProfile';
import { IComment } from '../../../interfaces/IComment';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss']
})
export class CommentComponent {

	@Input() profile: IProfile;
	@Input() comment: IComment;
}
