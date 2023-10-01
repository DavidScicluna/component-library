import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import classNames from 'classnames';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';

import { useCarouselArrowState } from '../../common/hooks';
import { CarouselLinearGradient } from '..';

import { __KEYS_CAROUSEL_RIGHT_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { CarouselRightLinearGradientProps, CarouselRightLinearGradientRef } from './common/types';

const CarouselRightLinearGradient = forwardRef(function CarouselRightLinearGradient<Element extends ElementType>(
	props: CarouselRightLinearGradientProps<Element>,
	ref: CarouselRightLinearGradientRef<Element>
): ReactElement {
	const { className = __DEFAULT_CLASSNAME__, ...rest } = props;

	const { isVisible } = useCarouselArrowState('right');

	return (
		<CarouselLinearGradient<Element>
			{...rest}
			ref={ref}
			className={classNames(__KEYS_CAROUSEL_RIGHT_LINEAR_GRADIENT_CLASS__, { [className]: !!className })}
			direction='right'
			isVisible={isVisible}
		/>
	);
});

CarouselRightLinearGradient.displayName = 'CarouselRightLinearGradient';

export default CarouselRightLinearGradient;
