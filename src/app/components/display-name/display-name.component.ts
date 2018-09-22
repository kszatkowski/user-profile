import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-display-name',
	templateUrl: './display-name.component.html',
	styleUrls: ['./display-name.component.scss']
})
export class DisplayNameComponent {

	@Input() fullName: string;
	@Input() city: string;
	@Output() likeClicked: any = new EventEmitter();

	like(): void {
		this.likeClicked.emit();
	}
}
