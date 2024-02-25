import { useCallback, useEffect } from 'react';

import { debounce } from 'lodash-es';
import { useWindowEventListener } from 'rooks';

import theme from '@common/theme';
import type { ThemeBreakpoint } from '@common/types';

import useBoolean from './useBoolean';

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
	if (typeof window !== 'undefined') {
		return window.matchMedia(getQuery(query)).matches;
	} else {
		return false;
	}
};

const useMediaQuery = (query: Query): boolean => {
	const [matches, setMatches] = useBoolean(getMatches(query));

	const handleGetMatches = useCallback(
		debounce(() => {
			if (getMatches(query)) {
				setMatches.on();
			} else {
				setMatches.off();
			}
		}, 0),
		[query]
	);

	useEffect(() => handleGetMatches(), [query]);
	useWindowEventListener('resize', handleGetMatches);

	return matches;
};

export default useMediaQuery;
