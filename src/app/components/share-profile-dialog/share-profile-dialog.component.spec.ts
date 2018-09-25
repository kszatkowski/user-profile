import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareProfileDialogComponent } from './share-profile-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

describe('ShareProfileDialogComponent', () => {
	let component: ShareProfileDialogComponent;
	let fixture: ComponentFixture<ShareProfileDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ShareProfileDialogComponent],
			imports: [MatDialogModule],
			providers: [{
				provide: MatDialogRef, useValue: {}
			}]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ShareProfileDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
