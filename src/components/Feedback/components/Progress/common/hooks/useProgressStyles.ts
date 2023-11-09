import type { ElementType } from 'react';

import { keyframes } from '@emotion/react';

import { useConst } from '@common/hooks';
import type { PolymorphicDefaultElement, Style } from '@common/types';
import { getAnimationDuration } from '@common/utils';

import { __DEFAULT_PROGRESS_VARIANT__ } from '../constants';
import type { ProgressProps } from '../types';

type UseProgressStylesProps<Element extends ElementType = PolymorphicDefaultElement> = Pick<
	ProgressProps<Element>,
	'variant'
>;
type UseProgressStylesReturn = Style;

const horizontalIndeterminate = keyframes({
	from: { left: '-50%' },
	to: { left: '100%' }
});

const verticalIndeterminate = keyframes({
	from: { bottom: '-50%' },
	to: { bottom: '100%' }
});

const useProgressStyles = <Element extends ElementType = PolymorphicDefaultElement>(
	props: UseProgressStylesProps<Element>
): UseProgressStylesReturn => {
	const duration = useConst(getAnimationDuration('ultra-slow'));

	const { variant = __DEFAULT_PROGRESS_VARIANT__ } = props;

	return {
		animationDuration: `${duration}s`,
		animationIterationCount: 'infinite',
		animationName: variant === 'horizontal' ? horizontalIndeterminate : verticalIndeterminate
	};
};

export default useProgressStyles;
