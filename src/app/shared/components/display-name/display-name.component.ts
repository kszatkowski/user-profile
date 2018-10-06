import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-display-name',
	templateUrl: './display-name.component.html',
	styleUrls: ['./display-name.component.scss']

})
export class DisplayNameComponent {

	@Input() fullName: string;
	@Input() city: string;
	@Input() image: string;
	@Input() imgWidth: number;
	@Input() imgHeight: number;
	@Input() hideLikeButton: boolean;
	@Input() likeButtonClicked: boolean;
	@Output() likeEmitter: EventEmitter<any> = new EventEmitter();

	like(): void {
		this.likeEmitter.emit();
	}
}
