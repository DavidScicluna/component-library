import { useCallback, useEffect, useState } from 'react';

import { debounce } from 'lodash-es';
import { useWindowSize } from 'rooks';

import type { ThemeBreakpoint } from '../types';
import { getBreakpoint } from '../utils';

const useBreakpoint = (): ThemeBreakpoint => {
	const { innerWidth: windowWidth = 0 } = useWindowSize();

	const [breakpoint, setBreakpoint] = useState<ThemeBreakpoint>(getBreakpoint());

	const handleGetBreakpoint = useCallback(
		debounce(() => {
			setBreakpoint(getBreakpoint(windowWidth || 0));
		}, 0),
		[windowWidth]
	);

	useEffect(() => handleGetBreakpoint(), [windowWidth]);

	return breakpoint;
};

export default useBreakpoint;
