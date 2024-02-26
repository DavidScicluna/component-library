import { forwardRef } from 'react';

import classNames from 'classnames';

import { DEFAULT_CLASSNAME } from '@common/constants';
import type { PolymorphicElementType } from '@common/types';

import { useCarouselArrowState } from '../../common/hooks';
import type { CarouselLinearGradientProps } from '..';
import { CarouselLinearGradient } from '..';

import { KEYS_CAROUSEL_RIGHT_LINEAR_GRADIENT_CLASS } from './common/keys';
import type { CarouselRightLinearGradientProps, CarouselRightLinearGradientRef } from './common/types';

const CarouselRightLinearGradient = forwardRef(function CarouselRightLinearGradient<
	Element extends PolymorphicElementType
>(props: CarouselRightLinearGradientProps<Element>, ref: CarouselRightLinearGradientRef<Element>): JSX.Element {
	const { className = DEFAULT_CLASSNAME, ...rest } = props;

	const { isVisible } = useCarouselArrowState('right');

	return (
		<CarouselLinearGradient
			{...(rest as CarouselLinearGradientProps<Element>)}
			ref={ref}
			className={classNames(KEYS_CAROUSEL_RIGHT_LINEAR_GRADIENT_CLASS, { [className]: !!className })}
			direction='right'
			isVisible={isVisible}
		/>
	);
});

// CarouselRightLinearGradient.displayName = 'CarouselRightLinearGradient';

export default CarouselRightLinearGradient;
