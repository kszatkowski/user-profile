import { SharedComponentsModule } from '@app/shared/components/shared-components.module';

describe('SharedComponentsModule', () => {
	let sharedComponentsModule: SharedComponentsModule;

	beforeEach(() => {
		sharedComponentsModule = new SharedComponentsModule();
	});

	it('should create an instance', () => {
		expect(sharedComponentsModule).toBeTruthy();
	});
});
