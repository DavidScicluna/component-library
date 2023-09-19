import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useGetHorizontalScrollAPIContext, useHorizontalScrollArrowState } from '../../common/hooks';
import { HorizontalScrollLinearGradient } from '../HorizontalScrollLinearGradient';

import { __KEYS_HORIZONTAL_SCROLL_LEFT_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { HorizontalScrollLeftLinearGradientProps, HorizontalScrollLeftLinearGradientRef } from './common/types';

const HorizontalScrollLeftLinearGradient = forwardRef(function HorizontalScrollLeftLinearGradient<
	Element extends ElementType
>(
	props: HorizontalScrollLeftLinearGradientProps<Element>,
	ref: HorizontalScrollLeftLinearGradientRef<Element>
): ReactElement {
	const __DEFAULT_HORIZONTAL_SCROLL_LEFT_LINEAR_GRADIENT_SCROLL__ = useGetHorizontalScrollAPIContext();

	const {
		className = __DEFAULT_CLASSNAME__,
		scroll = __DEFAULT_HORIZONTAL_SCROLL_LEFT_LINEAR_GRADIENT_SCROLL__,
		...rest
	} = props;

	const { isVisible } = useHorizontalScrollArrowState({ direction: 'left', scroll });

	return (
		<HorizontalScrollLinearGradient<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_HORIZONTAL_SCROLL_LEFT_LINEAR_GRADIENT_CLASS__, { [className]: !!className })}
			direction='left'
			isVisible={isVisible}
		/>
	);
});

HorizontalScrollLeftLinearGradient.displayName = 'HorizontalScrollLeftLinearGradient';

export default HorizontalScrollLeftLinearGradient;
