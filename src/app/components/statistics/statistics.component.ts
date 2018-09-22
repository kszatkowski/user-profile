import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

	@Input() likes: number;
	@Input() following: number;
	@Input() followers: number;

	follow(): void {
		this.followers++;
	}

}
