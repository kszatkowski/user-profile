import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-statistcs-item',
	templateUrl: './statistcs-item.component.html',
	styleUrls: ['./statistcs-item.component.scss']
})
export class StatistcsItemComponent {

	@Input() quantity: number;
	@Input() description: string;
}
