import { keyframes } from '@emotion/react';

import { useConst } from '@common/hooks';
import type { Style } from '@common/types';
import { getAnimationDuration } from '@common/utils';

type UseProgressStylesReturn = Style;

const indeterminate = keyframes({
	from: { left: '-50%' },
	to: { left: '100%' }
});

const useProgressStyles = (): UseProgressStylesReturn => {
	const duration = useConst(getAnimationDuration('ultra-slow'));

	return {
		animationDuration: `${duration}s`,
		animationIterationCount: 'infinite',
		animationName: indeterminate
	};
};

export default useProgressStyles;
