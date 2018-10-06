import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsComponent } from './statistics.component';

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

	describe('follow', () => {
		describe('when followButtonClicked was set on false', () => {
			beforeEach(() => {
				component.followers = 5;
				component.followButtonClicked = false;
			});

			it('should increment followers value', () => {
				component.follow();
				expect(component.followers).toBe(6);
			});

			it('should set followButtonClicked value on true', () => {
				component.follow();
				expect(component.followButtonClicked).toBe(true);
			});
		});

		describe('when followButtonClicked was set on true', () => {
			beforeEach(() => {
				component.followers = 5;
				component.followButtonClicked = true;
			});

			it('should decrement followers value', () => {
				component.follow();
				expect(component.followers).toBe(4);
			});

			it('should set followButtonClicked value on false', () => {
				component.follow();
				expect(component.followButtonClicked).toBe(false);
			});
		});
	});
});
