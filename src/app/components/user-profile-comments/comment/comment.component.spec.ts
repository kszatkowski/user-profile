import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import { DayDifferencePipe } from '../../../pipes/day-difference.pipe';

@Component({
	selector: 'app-display-name',
	template: ''
})
class DisplayNameComponentMock {
	@Input() fullName: string;
	@Input() city: string;
	@Input() image: string;
	@Input() imgWidth: number;
	@Input() imgHeight: number;
	@Input() hideLikeButton: boolean;
}

describe('CommentComponent', () => {
	let component: CommentComponent;
	let fixture: ComponentFixture<CommentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CommentComponent, DisplayNameComponentMock, DayDifferencePipe]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CommentComponent);
		component = fixture.componentInstance;
		component.comment = {
			content: '',
			date: new Date()
		}
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
