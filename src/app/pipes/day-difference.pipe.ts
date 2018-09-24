import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dayDifference' })
export class DayDifferencePipe implements PipeTransform {
	transform(date: Date): string {
		let now = new Date();
		let incomingDate = new Date(date);
		let timeDiff = Math.abs(now.getTime() - incomingDate.getTime());
		let diffDays = timeDiff / (1000 * 3600 * 24);

		return (diffDays < 1 && now.getDay() === incomingDate.getDay()) ? 'Today' : `${Math.ceil(diffDays)}d`;
	}
}