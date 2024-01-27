import { keyframes } from '@emotion/react';

import { useConst } from '@common/hooks';
import type { Style } from '@common/types';
import { getAnimationDuration } from '@common/utils';

import { __DEFAULT_PROGRESS_VARIANT__ } from '../constants';
import type { ProgressElement, ProgressProps } from '../types';

import useProgressResponsiveValues from './useProgressResponsiveValues';

type UseProgressStylesProps<Element extends ProgressElement> = Pick<ProgressProps<Element>, 'variant'>;
type UseProgressStylesReturn = Style;

const horizontalIndeterminate = keyframes({
	from: { left: '-50%' },
	to: { left: '100%' }
});

const verticalIndeterminate = keyframes({
	from: { bottom: '-50%' },
	to: { bottom: '100%' }
});

const useProgressStyles = <Element extends ProgressElement>(
	props: UseProgressStylesProps<Element>
): UseProgressStylesReturn => {
	const duration = useConst(getAnimationDuration('ultra-slow'));

	const { variant: variantProp = __DEFAULT_PROGRESS_VARIANT__ } = props;

	const { variant } = useProgressResponsiveValues<Element>({ variant: variantProp });

	return {
		animationDuration: `${duration}s`,
		animationIterationCount: 'infinite',
		animationName: variant === 'horizontal' ? horizontalIndeterminate : verticalIndeterminate
	};
};

export default useProgressStyles;
