import { useEffect, useState } from 'react';

import theme from '@common/theme';
import type { ThemeDuration } from '@common/types';
import { convertStringToNumber } from '@common/utils';

type UseDebounceDelay = ThemeDuration | number;

const getDelay = (delay: UseDebounceDelay = 'normal') => {
	return typeof delay === 'number' ? delay : convertStringToNumber(theme.transitionDuration[delay], 'ms');
};

// https://usehooks-ts.com/react-hook/use-debounce
const useDebounce = <T>(value: T, delay: UseDebounceDelay = 'normal'): T => {
	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, getDelay(delay));

		return () => clearTimeout(timer);
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;
