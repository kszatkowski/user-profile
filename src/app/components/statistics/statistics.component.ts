import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

	@Input() likes: number;
	@Input() following: number;
	@Input() followers: number;

	constructor() { }

	ngOnInit() {
	}

}
