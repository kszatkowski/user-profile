import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-statistcs-item',
	template: ''
})
class StatistcsItemComponentMock {
	@Input() quantity: number;
	@Input() description: string;
}

describe('StatisticsComponent', () => {
	let component: StatisticsComponent;
	let fixture: ComponentFixture<StatisticsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [StatisticsComponent, StatistcsItemComponentMock]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(StatisticsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
