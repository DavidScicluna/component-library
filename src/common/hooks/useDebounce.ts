import { useEffect, useState } from 'react';

import theme from '../theme';
import { Duration } from '../types/theme';
import { convertStringToNumber } from '../utils';

// https://usehooks-ts.com/react-hook/use-debounce

const useDebounce = <T>(value: T, delay: Duration = 'normal'): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, convertStringToNumber(theme.transitionDuration[delay], 'ms'));

		return () => clearTimeout(timer);
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;
