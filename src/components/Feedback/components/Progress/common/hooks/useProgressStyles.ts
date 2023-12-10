import { keyframes } from '@emotion/react';

import { useConst } from '@common/hooks';
import type { Style } from '@common/types';
import { getAnimationDuration } from '@common/utils';

import { __DEFAULT_PROGRESS_VARIANT__ } from '../constants';
import type { ProgressProps } from '../types';

import useProgressResponsiveValues from './useProgressResponsiveValues';

type UseProgressStylesProps = Pick<ProgressProps, 'variant'>;
type UseProgressStylesReturn = Style;

const horizontalIndeterminate = keyframes({
	from: { left: '-50%' },
	to: { left: '100%' }
});

const verticalIndeterminate = keyframes({
	from: { bottom: '-50%' },
	to: { bottom: '100%' }
});

const useProgressStyles = (props: UseProgressStylesProps): UseProgressStylesReturn => {
	const duration = useConst(getAnimationDuration('ultra-slow'));

	const { variant: variantProp = __DEFAULT_PROGRESS_VARIANT__ } = props;

	const { variant } = useProgressResponsiveValues({ variant: variantProp });

	return {
		animationDuration: `${duration}s`,
		animationIterationCount: 'infinite',
		animationName: variant === 'horizontal' ? horizontalIndeterminate : verticalIndeterminate
	};
};

export default useProgressStyles;
