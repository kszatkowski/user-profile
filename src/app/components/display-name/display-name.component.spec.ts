import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayNameComponent } from './display-name.component';

describe('DisplayNameComponent', () => {
	let component: DisplayNameComponent;
	let fixture: ComponentFixture<DisplayNameComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DisplayNameComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DisplayNameComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	describe('like', () => {
		it('should emit event when button is clicked', () => {
			spyOn(component.likeClicked, 'emit');
			component.like();
			expect(component.likeClicked.emit).toHaveBeenCalled();
		});
	});
});
