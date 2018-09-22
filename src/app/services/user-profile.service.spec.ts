import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserProfileService } from './user-profile.service';

describe('UserProfileService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports: [HttpClientTestingModule]
	}));

	it('should be created', () => {
		const service: UserProfileService = TestBed.get(UserProfileService);
		expect(service).toBeTruthy();
	});
});
