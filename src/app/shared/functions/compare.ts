export function compare<T>(arg1: T, arg2: T, descending = true) {
	if (descending) {
		if (arg1 < arg2)
			return -1;
		if (arg1 > arg2)
			return 1;
		return 0;
	} else {
		if (arg1 > arg2)
			return -1;
		if (arg1 < arg2)
			return 1;
		return 0;
	}
}