import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-statistcs-item',
	templateUrl: './statistcs-item.component.html',
	styleUrls: ['./statistcs-item.component.scss']
})
export class StatistcsItemComponent implements OnInit {

	@Input() quantity: number;
	@Input() description: string;

	constructor() { }

	ngOnInit() {
	}

}
