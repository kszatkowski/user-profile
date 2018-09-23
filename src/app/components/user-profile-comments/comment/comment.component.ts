import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IComment } from '../user-profile-comments.component';

@Component({
	selector: 'app-comment',
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

	@Input() comment: IComment;

	constructor() { }

	ngOnInit() {
	}

}
