import { DayDifferencePipe } from './day-difference.pipe';

describe('day-difference pipe', () => {
	let pipe: DayDifferencePipe;

	beforeEach(() => {
		pipe = new DayDifferencePipe();
	});

	it('create an instance', () => {
		const pipe = new DayDifferencePipe();
		expect(pipe).toBeTruthy();
	});

	it('should return Today if comment was added on the same day', () => {
		const today = new Date();
		const result = pipe.transform(today);

		expect(result).toBe('Today');
	});

	it('should return difference between two dates', () => {
		const today = new Date();
		const result = pipe.transform(new Date(today.setDate(today.getDate() - 1)));

		expect(result).toBe('1d');
	});
});
