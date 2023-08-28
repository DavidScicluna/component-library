import { useEffect, useState } from 'react';

import theme from '@common/theme';
import type { ThemeDuration } from '@common/types';
import { convertStringToNumber } from '@common/utils';

// https://usehooks-ts.com/react-hook/use-debounce
const useDebounce = <T>(value: T, delay: ThemeDuration = 'normal'): T => {
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
