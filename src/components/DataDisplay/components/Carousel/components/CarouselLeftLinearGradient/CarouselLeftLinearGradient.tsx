import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState } from '../../common/hooks';
import { CarouselLinearGradient } from '..';

import { __KEYS_CAROUSEL_LEFT_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { CarouselLeftLinearGradientProps, CarouselLeftLinearGradientRef } from './common/types';

const CarouselLeftLinearGradient = forwardRef(function CarouselLeftLinearGradient<Element extends ElementType>(
	props: CarouselLeftLinearGradientProps<Element>,
	ref: CarouselLeftLinearGradientRef<Element>
): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	const { isVisible } = useCarouselArrowState('left');

	return (
		<CarouselLinearGradient<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_LEFT_LINEAR_GRADIENT_CLASS__, { [className]: !!className })}
			direction='left'
			isVisible={isVisible}
		/>
	);
});

CarouselLeftLinearGradient.displayName = 'CarouselLeftLinearGradient';

export default CarouselLeftLinearGradient;
