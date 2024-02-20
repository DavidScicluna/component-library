import { useEffect, useState } from 'react';

import theme from '@common/theme';
import type { ThemeBreakpoint } from '@common/types';

export type Query = { breakpoint: ThemeBreakpoint; type: 'width' | 'height'; direction: 'min' | 'max' } | string;

const getQuery = (query: Query): string => {
	if (typeof query === 'string') {
		return query;
	} else {
		const { breakpoint, type, direction } = query;
		return `(${direction}-${type}: ${theme.container[breakpoint]})`;
	}
};

const getMatches = (query: Query): boolean => {
	// Prevents SSR issues
	if (typeof globalThis?.window !== 'undefined') {
		return globalThis?.window?.matchMedia(getQuery(query)).matches;
	}
	return false;
};

const useMediaQuery = (query: Query): boolean => {
	const [matches, setMatches] = useState<boolean>(getMatches(query));

	function handleChange() {
		setMatches(getMatches(query));
	}

	useEffect(() => {
		const matchMedia = globalThis?.window?.matchMedia(getQuery(query));

		// Triggered at the first client-side load and if query changes
		handleChange();

		// Listen matchMedia
		if (matchMedia.addListener) {
			matchMedia.addListener(handleChange);
		} else {
			matchMedia.addEventListener('change', handleChange);
		}

		return () => {
			if (matchMedia.removeListener) {
				matchMedia.removeListener(handleChange);
			} else {
				matchMedia.removeEventListener('change', handleChange);
			}
		};
	}, [query]);

	return matches;
};

export default useMediaQuery;
