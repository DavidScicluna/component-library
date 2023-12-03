import type { ElementType, ReactElement } from 'react';
import { forwardRef } from 'react';

import { __DEFAULT_CLASSNAME__ } from '@common/constants';
import type { PolymorphicComponentWithRef, PolymorphicDefaultElement } from '@common/types';

import { useCarouselArrowState } from '../../common/hooks';
import { CarouselLinearGradient } from '..';

import { __KEYS_CAROUSEL_RIGHT_LINEAR_GRADIENT_CLASS__ } from './common/keys';
import type { CarouselRightLinearGradientProps, CarouselRightLinearGradientRef } from './common/types';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const classNames = require('classnames');

const CarouselRightLinearGradient: PolymorphicComponentWithRef = forwardRef(function CarouselRightLinearGradient<
	Element extends ElementType = PolymorphicDefaultElement
>(props: CarouselRightLinearGradientProps<Element>, ref: CarouselRightLinearGradientRef<Element>): ReactElement {
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
