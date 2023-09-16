import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useGetHorizontalScrollAPIContext, useHorizontalScrollArrowState } from '../../common/hooks';
import { HorizontalScrollLinearGradient } from '../HorizontalScrollLinearGradient';

import { __KEYS_HORIZONTAL_SCROLL_RIGHT_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { HorizontalScrollRightLinearGradientProps, HorizontalScrollRightLinearGradientRef } from './common/types';

const HorizontalScrollRightLinearGradient = forwardRef(function HorizontalScrollRightLinearGradient<
	Element extends ElementType
>(
	props: HorizontalScrollRightLinearGradientProps<Element>,
	ref: HorizontalScrollRightLinearGradientRef<Element>
): ReactElement {
	const __DEFAULT_HORIZONTAL_SCROLL_RIGHT_LINEAR_GRADIENT_SCROLL__ = useGetHorizontalScrollAPIContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		scroll = __DEFAULT_HORIZONTAL_SCROLL_RIGHT_LINEAR_GRADIENT_SCROLL__,
		...rest
	} = props;

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'right', scroll });

	return (
		<HorizontalScrollLinearGradient<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_HORIZONTAL_SCROLL_RIGHT_LINEAR_GRADIENT_CLASS__, { [className]: !!className })}
			direction='right'
			isVisible={isVisible}
		/>
	);
});

export default HorizontalScrollRightLinearGradient;
