import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-statistics',
	templateUrl: './statistics.component.html',
	styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

	@Input() likes: number;
	@Input() following: number;
	@Input() followers: number;
	followButtonClicked: boolean = false;

	follow(): void {
		this.followButtonClicked = !this.followButtonClicked;
		this.followButtonClicked ? this.followers++ : this.followers--;
	}
}
