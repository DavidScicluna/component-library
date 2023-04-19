import { useEffect,useState } from 'react';

import { Duration } from '../../theme/types';
import { convertStringToNumber } from '../utils';

import useTheme from './useThemeTyped';

// https://usehooks-ts.com/react-hook/use-debounce

const useDebounce = <T>(value: T, delay: Duration = 'normal'): T => {
	const theme = useTheme();

	const [debouncedValue, setDebouncedValue] = useState<T>(value);

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedValue(value);
		}, convertStringToNumber(theme.transition.duration[delay], 'ms'));

		return () => clearTimeout(timer);
	}, [value, delay]);

	return debouncedValue;
};

export default useDebounce;
